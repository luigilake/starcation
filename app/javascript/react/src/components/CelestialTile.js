import React, {Component} from 'react';
import { Link } from 'react-router'



const CelestialTile = (props) => {
  return(
    <div className="grid-container celestial-tile">
    <div className="grid-x">
      <div className="small-3 cell" id="index-image">
        <img src={props.photo.url} alt={`Photo of ${props.name}`}></img>
      </div>
      <div className="small-5 cell celestial-info">
        <Link to={`/celestials/${props.id}`}><h1 className="celestial-name">{props.name}</h1></Link>
        <p className = "celestial-type">Celestial Type: {props.type}</p>
        <p className="rating">Rating: haha</p>
      </div>
    </div>
    </div>
  )
}

export default CelestialTile
