import React from 'react';
import { browserHistory } from 'react-router';

import PageLayout from '../components/Layout/PageLayout';
import PortfolioTitle from '../components/Portfolio/PortfolioTitle';
import ProjectSlider from '../components/Portfolio/ProjectSlider';
import CircleOfDetails from '../components/Portfolio/CircleOfDetails';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    setTimeout(() => {
      document.getElementsByTagName('html')['0'].onmousewheel = (e) => {
        if (e.deltaY > 50) { browserHistory.push('/contact'); }
        if (e.deltaY < -50) { browserHistory.push('/'); }
      };
    }, 500);
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
