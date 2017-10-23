import React, {Component} from 'react';
import { Link } from 'react-router';
import CelestialTile from '../components/CelestialTile'

class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      celestials_array: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/celestials')
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
      .then(body => {
        this.setState({celestials_array: body})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {

    let celestials = this.state.celestials_array.map(celestial =>{
      return(
        <CelestialTile
          key = {celestial.id}
          id = {celestial.id}
          name = {celestial.name}
          type = {celestial.celestial_type}
          distance = {celestial.distance}
          size = {celestial.size}
          photo = {celestial.photo}
        />
      )
    })

    return (
      <div>
        <div className="add-destination">
        <a href = '/celestials/new' className = "new-destination">Add a new Destination</a>
        </div>
        {celestials}
      </div>
    )
  }
}

export default IndexPage
