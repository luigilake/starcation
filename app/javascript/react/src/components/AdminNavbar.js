import React, {Component} from 'react';
import { Link } from 'react-router'

const AdminNavbar = props => {
  return(
    <div className="grid-container">
      <div id='navbar'>
        <Link to='/'><button className="small-12 medium-4 large-1 cell navbar-button">Destinations</button></Link>
        <a href="/users/edit">
          <button className="small-12 medium-4 large-1 large-offset-9 cell navbar-button">User Profile</button>
        </a>
        <Link to='/admin'>
          <button className="small-12 medium-4 large-1 large-offset-9 cell navbar-button">Starcation Users</button>
        </Link>
        <a data-confirm="Are you sure?" rel="nofollow" href="/users/sign_out">
          <button className="small-12 medium-4 large-1 cell navbar-button">Sign out</button>
        </a>
      </div>
    </div>
  )
}

export default AdminNavbar
