import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router';

export default class PortfolioBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: spring(-105, { stiffness: 35, damping: 14 })
    };
  }

  onEnter = () => {
    this.setState({
      test: spring(0, { stiffness: 80, damping: 16 })
    });
  }

  onLeave = () => {
    this.setState({
      test: spring(-105, { stiffness: 80, damping: 16 })
    });
  }

  renderBtn = (interpolatingStyles) => {
    const styles = {
      WebkitTransform: `translateY(${interpolatingStyles.y}%)`,
      transform: `translateY(${interpolatingStyles.y}%)`,
    };

    return (
      <Link to="/portfolio" style={styles} className="portfolio-btn">View Portfolio</Link>
    );
  }

  renderBg = (interpolatingStyles) => {
    const styles = {
      WebkitTransform: `translateY(${interpolatingStyles.y}%)`,
      transform: `translateY(${interpolatingStyles.y}%)`,
    };

    return (
      <div style={styles} className="portfolio-btn-bg" />
    );
  }

  render() {
    return (
      <div onMouseEnter={this.onEnter} onMouseLeave={this.onLeave} className="portfolio-btn-container">
        <Motion
          defaultStyle={{ y: 300 }}
          style={{ y: spring(0, { stiffness: 320, damping: 60 }) }} 
        >
          {this.renderBtn}
        </Motion>
        <Motion defaultStyle={{ y: 200 }} style={{ y: this.state.test }} >
          {this.renderBg}
        </Motion>
      </div>
    );
  }
}
