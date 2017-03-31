import React from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';
import { openMenu } from '../../actions/menuActions';

@connect(store => ({
  menu: store.menu
}))

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
  }

  openMenu = () => {
    this.props.dispatch(openMenu());
  }

  renderHamburger = (interpolatingStyles) => {
    const styles = {
      WebkitTransform: `translateY(${interpolatingStyles.y}%)`,
      transform: `translateY(${interpolatingStyles.y}%)`,
    };
    return (
      <div onClick={this.openMenu} style={styles} className="menu">
        <p>MENU</p>
        <div className="hamburger">
          <div className="hamburger-mid" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Motion defaultStyle={{ y: -300 }} style={{ y: spring(0, { stiffness: 320, damping: 60 }) }} >
        {this.renderHamburger}
      </Motion>
    );
  }
}
