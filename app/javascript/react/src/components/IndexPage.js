import React, {Component} from 'react';
import { Link } from 'react-router'
import Celestial from './Celestial'

class IndexPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      celestials_array: []
    }
  }

  componentDidMount(){
    let that = this
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
        that.setState({celestials_array: body})
      })
  }

  render() {

    let celestials = this.state.celestials_array.map(celestial =>{
      return(
        <Celestial
          key = {celestial.id}
          id = {celestial.id}
          name = {celestial.name}
          type = {celestial.celestial_type}
          distance = {celestial.distance}
          size = {celestial.size}
        />
      )
    })

    return (
      <div>
        <h1>{celestials}</h1>
      </div>
    )
  }
}

export default IndexPage
