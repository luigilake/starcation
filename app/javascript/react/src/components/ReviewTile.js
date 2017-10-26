import React, {Component} from 'react';

const ReviewTile = props => {
  let deleteButton;
  if(props.deleteButton){
    deleteButton = <button onClick={props.handleClick}>Delete Review</button>
  }

  return(
    <div className="grid-container review-tile">
      <div className="grid-x">
      <div className=" small-1 cell user-review-image">
        <img className="user-photo" src={props.userimage} alt={`Photo of ${props.user}`}></img>
        <p className="review-creator">{props.user}</p>
      </div>
      <div className="small-5 cell review-info">
        <p className="review-body">{props.body}</p>
        <p className="review-rating">Rating: {props.rating}</p>
        <p className="review-votes">Votes: {props.votes}</p>
        <button onClick = {props.handleUpClick}>Upvote</button>
        <button onClick = {props.handleDownClick}>Downvote</button>
        {deleteButton}
      </div>
      </div>
    </div>
  )
}

export default ReviewTile;
