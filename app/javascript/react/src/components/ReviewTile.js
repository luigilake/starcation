import React, {Component} from 'react';

class ReviewTile extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {

    return(
      <div>
        <div className="user-review-image">
          <img src={this.props.userimage} alt={`Photo of ${this.props.user}`}></img>
        </div>
        <div className="review-info">
          <p className="review-creator">{this.props.user}</p>
          <p className="review-body">{this.props.body}</p>
          <p className="review-rating">Rating: {this.props.rating}</p>
          <p className="review-votes">Votes: {this.props.votes}</p>
          <button onClick = {this.props.handleUpClick}>Upvote</button>
          <button onClick = {this.props.handleDownClick}>Downvote</button>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
