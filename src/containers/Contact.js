import React from 'react';
import Navbar from './Navbar';
import Hamburger from '../components/Layout/Hamburger';
import Logo from '../components/Layout/Logo';
import SocialNav from '../components/Layout/SocialNav';
import SourceLink from '../components/Layout/SourceLink';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <Hamburger />
        <Logo />
        <Navbar />

        <h1>Contact Page</h1>

        <SocialNav />
        <SourceLink />
      </div>
    );
  }
}
