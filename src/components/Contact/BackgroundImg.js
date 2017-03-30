import React from 'react';
import bg from '../../images/citypeople.jpg';

export default class BackgroundImg extends React.Component {

  render() {
    return (
      <div className="contact-bg-container">
        <div style={{ backgroundImage: `url("${bg}")` }} className="contact-bg" />
        <div className="contact-rect-1" />
        <div className="contact-rect-2" />
        <div className="contact-rect-3" />
      </div>
    );
  }
}
