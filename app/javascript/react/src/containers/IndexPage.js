import React, {Component} from 'react';
import { Link } from 'react-router';
import CelestialTile from '../components/CelestialTile'
import FilterButton from '../components/FilterButton'
import SearchBar from '../components/SearchBar'

class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      celestialsArray: [],
      celestialTypes: ['', 'galaxy', 'constellation', 'star', 'planet', 'satellite', 'comet', 'asteroid', 'other'],
      selected_type: '',
      user_signed_in: false,
      search: ''
    }
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/celestials.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type':'application/json'}
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
      .then(body => {
        this.setState({celestialsArray: body.celestials, user_signed_in: body.current_user})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChangeDisplay(celestial_type) {
    this.setState({selected_type: celestial_type})
  }

  handleSearchChange(event) {
    this.setState({search: event.target.value})
  }



  render() {
    let celestials;
    if (this.state.search !== '') {
      celestials = this.state.celestialsArray.filter(celestial => {
          return celestial.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })

      celestials = celestials.map(celestial => {
        return(
          <CelestialTile
            key = {celestial.id}
            id = {celestial.id}
            name = {celestial.name}
            type = {celestial.celestial_type}
            photo = {celestial.photo}
          />
        )
      })
    }

    else {
      celestials = this.state.celestialsArray.map(celestial => {
        if(this.state.selected_type == '') {
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

        else if (this.state.selected_type == celestial.celestial_type) {
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
    }
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
    let newCelestialButton;
    if (this.state.user_signed_in){
        newCelestialButton = <a  href = '/celestials/new'><button id="add-celestial">Add a new celestial</button></a>
      }

    return (
      <div>
        <div className="grid-container filter-button-menu">
          <div className="grid-x filter-button-menu">
            {filterButtons}
          </div>
        </div>
        {newCelestialButton}
        <div id="title">
        StarCation
        </div>
        <div className="searchbar">
          <SearchBar
            value = {this.state.search}
            handleSearchChange = {this.handleSearchChange}
          />
        </div>
        <div className="grid-container celestial-list">
          <div className="grid-x">
            {celestials}
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
