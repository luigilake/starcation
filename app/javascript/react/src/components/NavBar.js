import React, {Component} from 'react';
import { Link } from 'react-router'
import SignedOutNavbar from './SignedOutNavbar'
import SignedInNavbar from './SignedInNavbar'
import AdminNavbar from './AdminNavbar'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      current_user: {},
      signed_in: false
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users.json`, {
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
      this.setState({ signed_in: body.signed_in, current_user: body.current_user})
    })
  }

  render(){
    let user_signed_in;
    if(!this.state.signed_in){
        user_signed_in = <SignedOutNavbar/>
    }else {
      if(this.state.current_user.admin){
        user_signed_in = <AdminNavbar/>
      } else {
        user_signed_in = <SignedInNavbar/>
      }
    }
  return(
    <div>
      {user_signed_in}
      {this.props.children}
    </div>
    )
  }
}

export default NavBar;
