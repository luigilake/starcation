import React, {Component} from 'react';
import ReviewTile from '../components/ReviewTile'
import ReviewFormContainer from './ReviewFormContainer'
import ReviewFormInaccessible from '../components/ReviewFormInaccessible'

class ReviewIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      current_user: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
  }

  componentDidMount(){
    let id = this.props.id
    fetch(`http://localhost:3000/api/v1/celestials/${id}.json`,{
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(response => {
        this.setState({ reviews: response.reviews, current_user: response.current_user })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewReview(formPayload){
    let that = this
    let id = this.props.id
    fetch(`/api/v1/celestials/${id}/reviews`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ review: formPayload })
    })
    .then(response => response.json())
    .then(body => {
      that.setState({ reviews: that.state.reviews.concat(body)})
    })
  }

  deleteReview(review_id){
    fetch(`http://localhost:3000//api/v1/celestials/${this.props.id}/reviews/${review_id}.json`,{
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body =>{
      this.setState({ reviews: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let formAccess;
    if (!this.state.current_user){
      formAccess = <ReviewFormInaccessible/>
    }else {
      formAccess = <ReviewFormContainer
        addNewReview={this.addNewReview}
        current_user={this.state.current_user}
        celestial={this.props.celestial}
      />
    }
    let deleteReview = false;
    if(this.state.current_user.admin){
      deleteReview = true
    }
    let reviews = this.state.reviews.map( review => {
      let handleDeleteReview = () => {
        this.deleteReview(review.id)
      }
      return(
          <ReviewTile
            key={review.id}
            id={review.id}
            body={review.body}
            rating={review.rating}
            votes={review.votes}
            user={review.user.username}
            userimage={review.user.avatar.url}
            celestial_id={this.props.id}
            deleteButton={deleteReview}
            handleClick={handleDeleteReview}
          />
      )
    })

    return(
      <div>
        <h3 className="review-label">Reviews</h3>
        {formAccess}
        {reviews}
      </div>

    )
  }
}

export default ReviewIndex;
