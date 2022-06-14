import React from 'react';
import Graph from './Graph.jsx'
import './css/RentCard.css';

function RentCard(props) {
  return(

      <div className="card">
        <h5 className="card-header"> </h5>
        <div className="card-body">
          <h5 className="card-title">
          </h5>	
          <span className="badge badge-header">{props.rent.nycBorough}</span>
          <ul className="list-group">
          <li className="list-group-item">Area: {props.rent.areaName}</li>
          </ul>
          <span className="badge badge-header">Year 2010 Average Rent</span>
          <ul className="list-group">
            <li className="list-group-item"> ${props.rent.rent2010} </li> 
          </ul>
          <span className="badge badge-header">Year 2022 Average Rent</span>
          <ul className="list-group">
            <li className="list-group-item">${props.rent.rent2022}</li>
          </ul>
          <span className="badge badge-header">Percentage Change</span>
          <ul className="list-group">
            <li className="list-group-item">  +{(((props.rent.rent2022-props.rent.rent2010)/props.rent.rent2010)*100).toFixed(2)}% </li>
          </ul>
        </div>
      </div>
  );

}

export default RentCard;
