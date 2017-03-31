import React from 'react';
import img from '../../images/asian-girl-2.png';
import ContactForm from '../../components/Contact/ContactForm';

export default class ContactBox extends React.Component {
  render() {
    return (
      <div className="contact-box-container">
        <div style={{ backgroundImage: `url("${img}")` }} className="contact-form-img" />
        <ContactForm />
      </div>
    );
  }
}
