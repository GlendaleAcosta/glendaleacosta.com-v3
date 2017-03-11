import React from 'react';
import ScrollBtn from '../components/ScrollBtn';
import SocialNav from '../components/SocialNav';
import Hamburger from '../components/Hamburger';
import GlendaleSVG from '../components/GlendaleSVG';
// import AcostaSVG from '../components/AcostaSVG';
import Navbar from './Navbar';

import img from '../images/Acosta-Title.svg';

const github = 'https://github.com/GlendaleAcosta/glendaleacosta.com-v3';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <Navbar />
        <div className="title">
          <GlendaleSVG />
          <img src={img} alt="Acosta" />
          <div className="sub-title-container">
            <p className="sub-title">
              An aspiring <span>engineer</span> and <span>designer</span>.
            </p>
            <button className="portfolio-btn">View Portfolio</button>
          </div>
        </div>

        <Hamburger />
        <SocialNav />
        <ScrollBtn />
        <a href={github} className="source-link">SOURCE</a>
      </div>
    );
  }
}

