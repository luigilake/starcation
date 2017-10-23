import React from 'react';

const ReviewTile = props => {
  return(
    <div>
      <div className="user-review-image">
        <img src={props.userimage} alt={`Photo of ${props.user}`}></img>
      </div>
      <div className="review-info">
        <p className="review-creator">{props.user}</p>
        <p className="review-body">{props.body}</p>
        <p className="review-rating">Rating: {props.rating}</p>
        <p className="review-votes">Votes: {props.votes}</p>
        <button>Upvote</button>
        <button>Downvote</button>
      </div>
    </div>
  )
}

export default ReviewTile;
