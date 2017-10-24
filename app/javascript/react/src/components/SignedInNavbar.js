import React from 'react';
import { Link } from 'react-router'

const SignedInNavbar = props => {
  return(
      <div id='navbar'>
        <a className="sign-out" data-confirm="Are you sure?" rel="nofollow" href="/users/sign_out">Sign out</a>
        <a className="user-profile" href="/users/edit">User Profile</a>
        <Link to='/' className="homepage">Destinations</Link>
        <a href='/' className='searchbar'>Searchbar Goes Here</a>
      </div>
  )
}

export default SignedInNavbar
