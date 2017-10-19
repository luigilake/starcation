import React, {Component} from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
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
        this.setState({ reviews: response.reviews})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let reviews = this.state.reviews.map( review => {
      return(
          <ReviewTile
            key={review.id}
            body={review.body}
            rating={review.rating}
            votes={review.votes}
          />
      )
    })

    return(
      <div>
        <h3>Reviews</h3>
        {reviews}
      </div>

    )
  }
}

export default ReviewIndex;
