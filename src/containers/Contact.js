import React from 'react';

import PageLayout from '../components/Layout/PageLayout';
import BackgroundImg from '../components/Contact/BackgroundImg';
import ContactTitle from '../components/Contact/ContactTitle';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page">

        <ContactTitle />
        <BackgroundImg />

        <div className="contact-box-container" />
        <PageLayout />
      </div>
    );
  }
}
