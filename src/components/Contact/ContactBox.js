import React from 'react';
import img from '../../images/asian-girl-2.png';

export default class ContactBox extends React.Component {
  render() {
    return (
      <div className="contact-box-container">
        <div style={{ backgroundImage: `url("${img}")` }} className="contact-form-img" />
        <div className="contact-form-container">
          <h4 className="contact-form-title">Email Me</h4>
          <form className="contact-form">
            <input className="input" ref="name" type="text" placeholder="Name" />
            <input className="input" ref="email" type="text" placeholder="Email" />
            <textarea className="form-textarea" ref="message" type="text" placeholder="Message" />
            <div className="form-btn-container">
              <button type="submit" className="form-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
