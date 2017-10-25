import React from 'react';
import { Link } from 'react-router'

const SignedOutNavbar = props => {
  return(
      <div id='navbar'>
        <a className="sign-in" href="/users/sign_in">Sign in</a>
        <a className="sign-up" href='/users/sign_up'>Sign up</a>
        <Link to='/' className="homepage">Destinations</Link>
        <a href='/' className='searchbar'>Searchbar Goes Here</a>
      </div>
  )
}

export default SignedOutNavbar
