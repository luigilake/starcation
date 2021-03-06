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
    this.updateReview = this.updateReview.bind(this)
    this.voteWasClicked = this.voteWasClicked.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
  }

  componentDidMount(){
    let id = this.props.id
    fetch(`/api/v1/celestials/${id}.json`,{
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
      console.log(response)
      this.setState({ reviews: response.reviews, current_user: response.current_user })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  updateReview(review) {
    fetch(`/api/v1/celestials/${this.props.id}/reviews/${review.review_id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(review),
      headers: { 'Content-Type': 'application/json' }
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
    fetch(`/api/v1/celestials/${this.props.id}/reviews/${review_id}.json`,{
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

  voteWasClicked(review_id, vote){
    let newReviewsArray = this.state.reviews.map(review => {
      if (review_id === review.id) {
        if(review.current_user_votes.length == 0){
          review.votes += vote
          review.current_user_votes.push({ value: vote })
        } else {
          if(review.current_user_votes[0].value == 1 &&
            vote == -1){
            review.votes -= 2
            review.current_user_votes[0].value = -1
          } else if(review.current_user_votes[0].value == -1 &&
            vote == 1){
            review.votes += 2
            review.current_user_votes[0].value = 1
          } else if(review.current_user_votes[0].value == 1 &&
            vote == 1){
              review.votes -= 1
              review.current_user_votes[0].value = 0
          } else if(review.current_user_votes[0].value == -1 &&
            vote == -1){
              review.votes += 1
              review.current_user_votes[0].value = 0
          } else if(review.current_user_votes[0].value == 0){
              review.votes += vote
              review.current_user_votes[0].value = vote
          }
        }
      }
      return(review)
    })
    this.updateReview({review_id: review_id, vote_value: vote})
    this.setState({reviews: newReviewsArray})
  }

  render(){
    let formAccess;
    let deleteReview = false;

    if (!this.state.current_user){
      formAccess = <ReviewFormInaccessible/>
    }else {
      formAccess = <ReviewFormContainer
        addNewReview={this.addNewReview}
        current_user={this.state.current_user}
        celestial={this.props.celestial}
      />
      if(this.state.current_user.admin){
        deleteReview = true
      }
    }

    let reviews = this.state.reviews.map( review => {
      let handleDeleteReview = () => {
        this.deleteReview(review.id)
      }
      let   upClick = () => { this.voteWasClicked(review.id,  1) }
      let downClick = () => { this.voteWasClicked(review.id, -1) }

      let currentUserVote = 0
      if (review.current_user_votes.length != 0) {
        currentUserVote = review.current_user_votes[0].value
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
            handleUpClick={upClick}
            handleDownClick={downClick}
            currentUserVote={currentUserVote}
          />
        )
    })

    return(
      <div>
        {formAccess}
        <div className="review-list">
          {reviews}
        </div>
      </div>
    )
  }
}

export default ReviewIndex;
