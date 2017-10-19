import React, {Component} from 'react';
import ReviewTile from '../components/ReviewTile'
import ReviewFormContainer from './ReviewFormContainer'

class ReviewIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      current_user: {}
    }
    this.addNewReview = this.addNewReview.bind(this)
  }

  componentDidMount(){
    let id = this.props.id
    fetch(`http://localhost:3000/api/v1/celestials/${id}`)
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
        console.log(response)
        this.setState({ reviews: response.reviews })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewReview(formPayload){
    let id = this.props.id
    fetch(`/api/v1/celestials/${id}/reviews`, {
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        review: formPayload
      })
    })
  }

  render(){
    let reviews = this.state.reviews.map( review => {
      return(
          <ReviewTile
            key={review.content.id}
            body={review.content.body}
            rating={review.content.rating}
            votes={review.content.votes}
            user={review.creator}
          />
      )
    })

    return(
      <div>
        <h3>Reviews</h3>
        <ReviewFormContainer
          addNewReview={this.addNewReview}
        />
        {reviews}
      </div>

    )
  }
}

export default ReviewIndex;
