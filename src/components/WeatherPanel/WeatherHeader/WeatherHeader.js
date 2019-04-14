import React from 'react';
import edinImage from '../../../assets/images/edinburgh.jpg';

const weatherHeader = (props) => (
  <header className="jumbotron my-4">
  <div className="row">
    <div className="col-lg-8 col-md-8 col-sm-8 col-5 mb-4">
        <h1 className="display-6">Open Weather Map - Edinburgh,UK</h1>
        <a href="#" onClick={props.loadMethod}className="btn btn-primary btn-lg">Reload Weather</a>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-5 mb-4">
      <img src={edinImage} class="img-thumbnail" alt="Edinburgh City" width="304" height="236"/>
    </div>
  </div>
  </header>
);

export default weatherHeader;
