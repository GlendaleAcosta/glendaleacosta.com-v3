import React from 'react';
import Particles from 'react-particles-js';

import SocialNav from '../components/SocialNav';
import Hamburger from '../components/Hamburger';
import Logo from '../components/Logo';
import Navbar from './Navbar';
import SourceLink from '../components/SourceLink';

import ScrollBtn from '../components/Home/ScrollBtn';
import GlendaleSVG from '../components/Home/GlendaleSVG';
import AcostaSVG from '../components/Home/AcostaSVG';
import PortfolioBtn from '../components/Home/PortfolioBtn';

const particleParams = {
  particles: {
    number: {
      value: 120
    },
    line_linked: {
      enable: false
    }
  }
};
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <Hamburger />
        <Navbar />
        <Logo />
        <div className="title">
          <GlendaleSVG />
          <AcostaSVG />
          <div className="sub-title-container">
            <p className="sub-title">
              An aspiring <span>engineer</span> and <span>designer</span>.
            </p>
            <p className="sub-title">
              An avid gamer and learner.
            </p>
            <PortfolioBtn />
          </div>
        </div>
        <SocialNav />
        <ScrollBtn />
        <SourceLink />
        <Particles width="100%" height="calc(100vh - 50px)" params={particleParams} />
      </div>
    );
  }
}

