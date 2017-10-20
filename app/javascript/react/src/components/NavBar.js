import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div className='navbar'>
      <Link to='/'>Destinations</Link>
      <a href="/users/sign_in">sign in</a>
      <a href="/users/edit">Edit user account</a>
      <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/users/sign_out">sign out</a>
      {props.children}
      </div>
  )
}

export default NavBar;
