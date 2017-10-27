import React, {Component} from 'react';

const ReviewTile = props => {
  let deleteButton;
  if(props.deleteButton){
    deleteButton = <button onClick={props.handleClick}>Delete Review</button>
  }

  let rating = []
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      rating.push(<span key={i} className="fa fa-star fa-2x checked"></span>);
    }
    else {
      rating.push(<span key={i} className="fa fa-star fa-2x"></span>);
    }
  }

  let upvote, downvote
  if (props.currentUserVote == 1) { upvote = 'upvote' }
  else if (props.currentUserVote == -1) {downvote = 'downvote'}

  return(
    <div className="grid-container review-tile">
      <div className="grid-x">
      <div className=" small-1 cell user-review-image">
        <img className="user-photo" src={props.userimage} alt={`Photo of ${props.user}`}></img>
        <p className="review-creator">{props.user}</p>
      </div>
      <div className="small-5 cell review-info">
        {rating}
        <p className="review-body">{props.body}</p>
        <div className='up-down-votes'>
          <i onClick = {props.handleUpClick} className={"fa fa-space-shuttle fa-2x fa-rotate-270 " + upvote } aria-hidden="true"></i>
          <span>{props.votes}</span>
          <i onClick = {props.handleDownClick} className={"fa fa-space-shuttle fa-2x fa-rotate-90 " + downvote } aria-hidden="true"></i>
        </div>
        {deleteButton}
      </div>
      </div>
    </div>
  )
}

export default ReviewTile;
