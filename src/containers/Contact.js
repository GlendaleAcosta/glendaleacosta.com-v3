import React from 'react';
import { browserHistory } from 'react-router';

import PageLayout from '../components/Layout/PageLayout';
import BackgroundImg from '../components/Contact/BackgroundImg';
import ContactTitle from '../components/Contact/ContactTitle';
import ContactBox from '../components/Contact/ContactBox';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
    setTimeout(() => {
      document.getElementsByTagName('html')['0'].onmousewheel = (e) => {
        if (e.deltaY < -50) { browserHistory.push('/portfolio'); }
      };
    }, 500);
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
