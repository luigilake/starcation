import React from 'react';
import { Link } from 'react-router'

const SignedInNavbar = props => {
  return(
    <div className="grid-container">
      <div className="grid-x nav-bar">
        <Link to='/'><button className="small-12 medium-4 large-1 cell navbar-button">Destinations</button></Link>
        <a href="/users/edit">
          <button className="small-12 medium-4 large-1 large-offset-9 cell navbar-button">User Profile</button>
        </a>
        <a data-confirm="Are you sure?" rel="nofollow" href="/users/sign_out">
          <button className="small-12 medium-4 large-1 cell navbar-button sign-out" id="sign-out">Sign out</button>
        </a>
      </div>
    </div>
  )
}

export default SignedInNavbar
