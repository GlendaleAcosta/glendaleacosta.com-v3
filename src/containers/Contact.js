import React from 'react';

import PageLayout from '../components/Layout/PageLayout';
import BackgroundImg from '../components/Contact/BackgroundImg';
import ContactTitle from '../components/Contact/ContactTitle';
import ContactBox from '../components/Contact/ContactBox';

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

        <ContactBox />
        <PageLayout />
      </div>
    );
  }
}
