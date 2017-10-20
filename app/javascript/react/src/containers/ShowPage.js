import React, {Component} from 'react';
import ReviewIndex from './ReviewIndex'

class ShowPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      celestial: {},
      photo: ''
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
        this.setState({ celestial: response.celestial, photo: response.celestial.photo.url})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let celestial = this.state.celestial
    return (
      <div>
        <div className="showpage-photo">
          <img src={this.state.photo} alt={`Photo of ${celestial.name}`}></img>
        </div>
        <div className="showpage-title">
          <h1>{celestial.name}</h1>
        </div>
        <div className="showpage-info">
          <h3>Details:</h3>
          <ul>
            <li>Type: {celestial.celestial_type}</li>
            <li>Size: {celestial.size}</li>
            <li>Distance: {celestial.distance} lightyears from Earth</li>
          </ul>
        </div>
        <div className="review-index">
          <ReviewIndex
            id={this.props.params.id}
            celestial={celestial}
          />
        </div>
      </div>
    )
  }
}

export default ShowPage
