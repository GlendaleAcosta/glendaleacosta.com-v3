import React from 'react';
import ScrollBtn from '../components/ScrollBtn';
import SocialNav from '../components/SocialNav';
import Hamburger from '../components/Hamburger';

const github = 'https://github.com/GlendaleAcosta/glendaleacosta.com-v3';

export default class Home extends React.Component {
  render() {
    return (
      <div className="page">
        <Hamburger />
        
        <SocialNav />
        <ScrollBtn />
        <a href={github} className="source-link">SOURCE</a>
      </div>
    );
  }
}

