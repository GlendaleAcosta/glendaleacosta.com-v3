import React from 'react';
import Particles from 'react-particles-js';

import PageLayout from '../components/Layout/PageLayout';

import ScrollBtn from '../components/Home/ScrollBtn';
import GlendaleSVG from '../components/Home/GlendaleSVG';
import AcostaSVG from '../components/Home/AcostaSVG';
import PortfolioBtn from '../components/Home/PortfolioBtn';
import SubTitle from '../components/Home/SubTitle';

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

        <div className="title">
          <GlendaleSVG />
          <AcostaSVG />
          <div className="sub-title-container">
            <SubTitle />
            <PortfolioBtn />
          </div>
        </div>
        <ScrollBtn />

        <PageLayout />
        <Particles width="100%" height="calc(100vh - 50px)" params={particleParams} />
      </div>
    );
  }
}

