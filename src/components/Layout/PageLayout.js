import React from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Navbar from '../../containers/Navbar';
import SocialNav from './SocialNav';
import SourceLink from './SourceLink';

export default class PageLayout extends React.Component {

  render() {
    return (
      <div className="page-layout">
        <Hamburger />
        <Logo />
        <Navbar />
        <SocialNav />
        <SourceLink />
      </div>
    );
  }
}
