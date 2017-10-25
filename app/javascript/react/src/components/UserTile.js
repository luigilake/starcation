import React from 'react';

const UserTile = (props) => {
  return(
    <div className="grid-container user-tile">
      <div className="grid-x">
        <div className="small-1 cell user-avatar-image">
          <img className="user-photo" src={props.avatar} alt={`photo of ${props.username}`}/>
        </div>
        <div className="small-5 cell user-info">
          <p className="user-name">{props.username}</p>
          <p className="full-name">{props.first_name} {props.last_name}</p>
          <p className="email">{props.email}</p>
          <button onClick={props.handleClick}>Delete User</button>
        </div>
      </div>
    </div>
  )
}

export default UserTile
//
//
