import React from 'react';
import Navbar from './Navbar';

import PageLayout from '../components/Layout/PageLayout';

import PortfolioTitle from '../components/Portfolio/PortfolioTitle';
import ProjectSlider from '../components/Portfolio/ProjectSlider';

export default class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <PortfolioTitle />
        <ProjectSlider />
        <PageLayout />
      </div>
    );
  }
}

        // <Hamburger />
        // <Logo />
        // <Navbar />
        // <PortfolioTitle />
        // <ProjectSlider />
        // <SocialNav />
        // <SourceLink />