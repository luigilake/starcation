import React, {Component} from 'react';
import { Link } from 'react-router';
import CelestialTile from '../components/CelestialTile'
import FilterButton from '../components/FilterButton'

class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      celestialsArray: [],
      celestialTypes: ['', 'galaxy', 'constellation', 'star', 'planet', 'satellite', 'comet', 'asteroid', 'other'],
      selected_type: ''
    }
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
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
        this.setState({celestialsArray: body})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChangeDisplay(celestial_type){
    this.setState({selected_type: celestial_type})
  }

  render() {
    console.log(this.state.selected_type)
    let celestials = this.state.celestialsArray.map(celestial =>{
      if(this.state.selected_type == ''){
        return(
          <CelestialTile
            key = {celestial.id}
            id = {celestial.id}
            name = {celestial.name}
            type = {celestial.celestial_type}
            photo = {celestial.photo}
          />
        )
      } else if (this.state.selected_type == celestial.celestial_type){
        return(
          <CelestialTile
            key = {celestial.id}
            id = {celestial.id}
            name = {celestial.name}
            type = {celestial.celestial_type}
            photo = {celestial.photo}
          />
        )
      }
    })

    let filterButtons = this.state.celestialTypes.map(type => {
      let handleClick = () => {
        this.handleChangeDisplay(type)
      }

      return(
        <FilterButton
          key={this.state.celestialTypes.indexOf(type) + 1}
          label={type}
          handleClick={handleClick}
        />
      )
    })


    return (
      <div>
        <div className="index-page-organization">
          {filterButtons}
        </div>
        <a href = '/celestials/new'>Add a new celestial</a>
        <h1>{celestials}</h1>
      </div>
    )
  }
}

export default IndexPage
