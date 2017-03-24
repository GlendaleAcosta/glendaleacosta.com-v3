import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

const github = 'https://github.com/GlendaleAcosta/glendaleacosta.com-v3';

export default class SourceLink extends Component {

  renderSrc = (interpolatingStyles) => {
    const styles = {
      WebkitTransform: `translateY(${interpolatingStyles.y}%)`,
      transform: `translateY(${interpolatingStyles.y}%)`,
    };
    return <a href={github} style={styles} className="source-link">SOURCE</a>;
  }

  render() {
    return (
      <Motion defaultStyle={{ y: 300 }} style={{ y: spring(0, { stiffness: 320, damping: 60 }) }} >
        {this.renderSrc}
      </Motion>
    );
  }
}
