import React from 'react';

const UserTile = (props) => {
  return(
    <div className="grid-container user-tile">
      <div className="grid-x">
        <div className="small-1 cell user-avatar-image">
          <img className="user-photo" src={props.avatar} alt={`photo of ${props.username}`}/>
        </div>
        <div className="small-5 cell user-info">
          <p>{props.username}</p>
          <p>{props.first_name} {props.last_name}</p>
          <p>{props.email}</p>
          <button onClick={props.handleClick}>Delete User</button>
        </div>
      </div>
    </div>
  )
}

export default UserTile
//
//
