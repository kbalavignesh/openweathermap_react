import React, { Component } from 'react';
import edinImage from '../../../assets/images/edinburgh.jpg';

class weatherHeader extends Component {
  paddingStyle = {
                  padding: '1rem 1rem'
              };

  render() {
  return (<header className="jumbotron my-4" style={this.paddingStyle}>
  <div className="row">
    <div className="col-lg-8 col-md-8 col-sm-8 col-5 mb-4">
        <h2 className="display-6">Weather Forecast - Edinburgh,UK</h2>
        <a href="#" onClick={this.props.loadMethod}className="btn btn-primary btn-lg">Update Weather</a>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-5 mb-4">
      <img src={edinImage} class="img-thumbnail" alt="Edinburgh City" width="304" height="236"/>
    </div>
  </div>
  </header>);
}
}

export default weatherHeader;
