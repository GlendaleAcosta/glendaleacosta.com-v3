import React from 'react';
import { Motion, spring } from 'react-motion';

export default class SubTitle extends React.Component {

  renderSubTitle = (interpolatingStyle) => {
    const styles = {
      WebkitTransform: `translateY( ${interpolatingStyle.y}%)`,
      transform: `translateY(${interpolatingStyle.y}%)`,
    };
    return (
      <p style={styles} className="sub-title">
        An aspiring <span>engineer</span> and <span>designer</span>.
      </p>
    );
  }

  render() {
    return (
      <Motion defaultStyle={{ y: 300 }} style={{ y: spring(0, { stiffness: 320, damping: 60 }) }} >
        {this.renderSubTitle}
      </Motion>
    );
  }
}
