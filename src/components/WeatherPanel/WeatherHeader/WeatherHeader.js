import React from 'react';

const weatherHeader = (props) => (
  <header className="jumbotron my-4">
    <h1 className="display-6">Open Weather Map - Edinburgh,UK</h1>
    <a href="#" onClick={props.loadMethod}className="btn btn-primary btn-lg">Reload Weather</a>
  </header>
);

export default weatherHeader;
