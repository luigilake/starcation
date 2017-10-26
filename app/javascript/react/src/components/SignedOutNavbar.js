import React from 'react';
import { Link } from 'react-router'

const SignedOutNavbar = props => {
  return(
    <div className="grid-container">
      <div className="grid-x nav-bar">
        <Link to='/'><button className="small-12 medium-4 large-1 cell navbar-button">Destinations</button></Link>
        <a className="sign-in" href="/users/sign_in">
          <button className="small-12 medium-4 large-1 large-offset-9 cell navbar-button">
            Sign in</button>
        </a>
        <a className="sign-up" href='/users/sign_up'>
          <button className="small-12 medium-4 large-1 cell navbar-button">Sign up</button>
        </a>
      </div>
    </div>
  )
}

export default SignedOutNavbar
