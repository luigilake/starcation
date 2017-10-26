import React, {Component} from 'react';
import { Link } from 'react-router'



const CelestialTile = (props) => {
  return(
    <div className="small-12 medium-6 large-3 cell celestial-tile">
      <div className="index-image-container" >
        <img className="index-image" src={props.photo.url} alt={`Photo of ${props.name}`}></img>
      </div>
      <div className="celestial-info">
        <Link to={`/celestials/${props.id}`}><h1 className="celestial-name">{props.name}</h1></Link>
        <p className = "celestial-type">Celestial Type: {props.type}</p>
        <p className="rating">Rating: haha</p>
      </div>
    </div>
  )
}

export default CelestialTile
