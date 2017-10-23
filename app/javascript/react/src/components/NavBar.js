import React, {Component} from 'react';
import { Link } from 'react-router'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      current_user: {},
      signed_in: false
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users.json`, {
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
      console.log(body)
      this.setState({ signed_in: body.signed_in, current_user: body.current_user})
    })
  }

  render(){
    // console.log(this.state)
    // let user_signed_in;
    // if(!this.state.signed_in){
    //   user_signed_in = <div>
    //   </div>
    // }else {
    //   user_signed_in = <div>
    //   </div>
    // }
  return(
    <div>
      <div id='navbar'>
      <a href="/users/sign_in">Sign in</a>
      <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
      <a href="/users/edit">User Profile</a>
        <Link to='/' className="homepage">Destinations</Link>
        <a href='/' className='searchbar'>Searchbar Goes Here</a>

      </div>
      {this.props.children}
    </div>
    )
  }
}

export default NavBar;
