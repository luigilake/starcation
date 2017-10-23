import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div>
    <div id='navbar'>
      <Link to='/' className="homepage">Destinations</Link>
      <a href='/' className='searchbar'>Searchbar Goes Here</a>
      <a href="/users/sign_in">Sign in</a>
      <a href="/users/edit">User Profile</a>
      <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
      </div>
      {props.children}
    </div>
  )
}

export default NavBar;
