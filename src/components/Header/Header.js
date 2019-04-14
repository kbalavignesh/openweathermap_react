import React from 'react';

const relativeStyle = {
                position: 'relative'
            }

const header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={relativeStyle}>
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul>
          <span className="navbar-brand">Open Weather Map API with React - Balavignesh Kasinathan </span>
        </ul>
      </div>
    </div>
  </nav>
);

export default header;
