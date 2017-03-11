import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import NavBox from '../components/NavBox';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavBox link="/" text="Home" />
        <NavBox link="/portfolio" text="Portfolio" />
        <NavBox link="/contact" text="Contact" />
      </div>
    );
  }
}
