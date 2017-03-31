import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { closeMenu } from '../actions/menuActions';

@connect(store => ({
  menu: store.menu
}))

export default class MenuModal extends React.Component {
  constructor(props) {
    super(props);
  }

  closeMenu = () => {
    this.props.dispatch(closeMenu());
  }

  render() {
    return (
      <div className="menu-modal">
        <div className="menu-container">
          <div onClick={this.closeMenu} className="x" />
          <Link onClick={this.closeMenu} to="/">HOME</Link>
          <Link onClick={this.closeMenu} to="/portfolio">PORTFOLIO</Link>
          <Link onClick={this.closeMenu} to="/contact">CONTACT</Link>
          <hr />
          <a href="#">FACEBOOK</a>
          <a href="#">LINKEDIN</a>
          <a href="#">GITHUB</a>
          <hr />
          <a href="#">SOURCE</a>
        </div>
      </div>
    );
  }
}
