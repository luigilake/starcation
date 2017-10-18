import React, {Component} from 'react';

const Celestial = (props) => {
  return(
    <div>
      <div className="index-image">IMAGE</div>
      <div className="index-details">
        <h1 className="celestial-name">{props.name}</h1>
        <p>{props.type}</p>
        <h5>Rating: haha</h5>
      </div>
    </div>
  )
}

export default Celestial
