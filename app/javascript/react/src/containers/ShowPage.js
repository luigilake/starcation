import React, {Component} from 'react';
import ReviewIndex from './ReviewIndex'

class ShowPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      celestial: {},
      photo: '',
      current_user: {}
    }
  }

  componentDidMount(){
    let id = this.props.params.id
    fetch(`/api/v1/celestials/${id}.json`, {
      credentials: "same-origin",
      method: "GET",
      headers: {"Content-Type": "application/json"}
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
        let user = {}
        if(response.current_user){
          user = response.current_user
        }
        this.setState({ celestial: response.celestial, photo: response.celestial.photo.url, current_user: user})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    console.log(this.state)
    let editButton;
    if(this.state.current_user.id == this.state.celestial.user_id || this.state.current_user.admin){
      editButton = <a href={`/celestials/${this.state.celestial.id}/edit`}><button>Edit Celestial</button></a>
    }
    let celestial = this.state.celestial
    return (
      <div className="grid-container">
        <div className="grid-x">
          <div className="small-12 medium-6 large-3 cell main-show-details">
            <img src={this.state.photo} alt={`Photo of ${celestial.name}`}></img>
            <h1>{celestial.name}</h1>
            <div className="showpage-info">
              <h3>Details:</h3>
              <ul>
                <p>Type: {celestial.celestial_type}</p>
                <p>Size: {celestial.size}</p>
                <p>Distance: {celestial.distance} lightyears from Earth</p>
              </ul>
              {editButton}
            </div>
          </div>
          <div className="small-12 medium-6 large-8 cell main-show-reviews review-index">
            <ReviewIndex
              id={this.props.params.id}
              celestial={celestial}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ShowPage
