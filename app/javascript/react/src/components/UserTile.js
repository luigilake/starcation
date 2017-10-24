import React from 'react';

const UserTile = (props) => {
  return(
    <div>

      <p>{props.username}</p>
      <p>{props.first_name}, {props.last_name}</p>
      <p>{props.email}</p>
      

    </div>
  )
}

export default UserTile
//
// <img className="avatar" src={props.avatar} alt={`photo of ${props.username}`}></img>
