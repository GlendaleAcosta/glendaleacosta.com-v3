import React from 'react';
import ScrollBtn from '../components/ScrollBtn';
import SocialNav from '../components/SocialNav';
import Hamburger from '../components/Hamburger';
import GlendaleSVG from '../components/GlendaleSVG';
import Navbar from './Navbar';

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
        </div>
        <Hamburger />
        <SocialNav />
        <ScrollBtn />
        <a href={github} className="source-link">SOURCE</a>
      </div>
    );
  }
}

