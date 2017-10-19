import React, {Component} from 'react';
import ReviewIndex from './ReviewIndex'

class ShowPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      celestial: {}
    }
  }

  componentDidMount(){
    let id = this.props.params.id
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
        this.setState({ celestial: response.celestial})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    return (
      <div>
        <div className="showpage-photo">
          IMAGE
        </div>
        <div className="showpage-title">
          <h1>{this.state.celestial.name}</h1>
        </div>
        <div className="showpage-info">
          <h3>Details:</h3>
          <ul>
            <li>Type: {this.state.celestial.celestial_type}</li>
            <li>Size: {this.state.celestial.size}</li>
            <li>Distance: {this.state.celestial.distance} lightyears from Earth</li>
          </ul>
        </div>
        <div className="review-index">
          <ReviewIndex
            id={this.props.params.id}
          />
        </div>
      </div>
    )
  }
}

export default ShowPage