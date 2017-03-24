import React from 'react';
import { Link } from 'react-router';
import Particles from 'react-particles-js';
import ScrollBtn from '../components/ScrollBtn';
import SocialNav from '../components/SocialNav';
import Hamburger from '../components/Hamburger';
import GlendaleSVG from '../components/GlendaleSVG';
import AcostaSVG from '../components/AcostaSVG';
import Logo from '../components/Logo';
import Navbar from './Navbar';
import SourceLink from '../components/SourceLink';

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
            <Link to="/portfolio" className="portfolio-btn">View Portfolio</Link>
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

