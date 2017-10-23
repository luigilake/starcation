import React, {Component} from 'react';
import { Link } from 'react-router'
import Foundation from 'react-foundation'


const CelestialTile = (props) => {
  return(
    <div className="grid-x grid-margin-x">
      <div className="medium-6 large-2 cell" id="index-image">
        <img src={props.photo.url} alt={`Photo of ${props.name}`}></img>
      </div>
      <div className="medium-6 large-10 cell">
        <Link to={`/celestials/${props.id}`}><h1 className="celestial-name">{props.name}</h1></Link>
        <p>{props.type}</p>
        <h5>Rating: haha</h5>
        </div>
    </div>
  )
}

export default CelestialTile;
