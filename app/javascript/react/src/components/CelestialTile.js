import React, {Component} from 'react';
import { Link } from 'react-router'


const CelestialTile = (props) => {
  return(
    <div>
      <div className="index-image">
        <img src={props.photo.url} alt={`Photo of ${props.name}`}></img>
      </div>
      <div className="index-details">
        <Link to={`/celestials/${props.id}`}><h1 className="celestial-name">{props.name}</h1></Link>
        <p>{props.type}</p>
        <h5>Rating: haha</h5>
      </div>
    </div>
  )
}

export default CelestialTile;
