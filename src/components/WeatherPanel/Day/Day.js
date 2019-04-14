import React from 'react';

const day = (props) => (
  <div className="col-lg-2 col-md-3 col-sm-4 col-5 mb-4">
    <div className="card h-100">
      <p className="card-header">{props.date} </p>
      <div className="card-body">
        <h4 className="card-title">{props.weather[0].main}</h4>
        <h6 className="card-title">{props.weather[0].description}</h6>
        <div className="card-text">
        <div className="row">Temp : {props.main.temp}</div>
        <div className="row">Max Temp : {props.main.temp_max}</div>
        <div className="row">Min Temp : {props.main.temp_min}</div>
        </div>
      </div>
    </div>
  </div>
);
export default day;
