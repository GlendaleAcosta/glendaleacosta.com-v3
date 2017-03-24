import React from 'react';
import { Motion, spring } from 'react-motion';
import logo from '../../images/Logot-test-4.png';

export default class Logo extends React.Component {

  renderLogo = (interpolatingStyles) => {
    const styles = {
      WebkitTransform: `translateY(${interpolatingStyles.y}%)`,
      transform: `translateY(${interpolatingStyles.y}%)`,
    };

    return (
      <div style={styles} className="logo">
        <img src={logo} alt="Glendale Acosta" />
      </div>
    );
  }

  render() {
    return (
      <Motion defaultStyle={{ y: -300 }} style={{ y: spring(0, { stiffness: 380, damping: 60 }) }} >
        {this.renderLogo}
      </Motion>
    );
  }
}
