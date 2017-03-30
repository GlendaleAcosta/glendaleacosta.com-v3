import React from 'react';
import Navbar from './Navbar';

import PageLayout from '../components/Layout/PageLayout';

import PortfolioTitle from '../components/Portfolio/PortfolioTitle';
import ProjectSlider from '../components/Portfolio/ProjectSlider';
import CircleOfDetails from '../components/Portfolio/CircleOfDetails';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props);
  }

  render() {
    return (
      <div className="page">
        <PortfolioTitle />
        <ProjectSlider />
        <CircleOfDetails />
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