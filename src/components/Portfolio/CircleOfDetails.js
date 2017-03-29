import React from 'react';

export default class CircleOfDetails extends React.Component {
  render() {
    return (
      <div className="project-circle" >
        <div className="project-number">1/5</div>

        <h4 className="project-title">Angular Movie Watchlist</h4>
        <div className="link-container">
          <a className="project-source">Source</a>
          <a className="project-link">Website</a>
        </div>
      </div>
    );
  }
}
