import React from 'react';
import Particles from 'react-particles-js';

import SocialNav from '../components/Layout/SocialNav';
import Hamburger from '../components/Layout/Hamburger';
import Logo from '../components/Layout/Logo';
import SourceLink from '../components/Layout/SourceLink';
import Navbar from './Navbar';

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

