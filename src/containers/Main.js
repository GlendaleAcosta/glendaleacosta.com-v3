import React, { Component } from 'react';
import Navbar from './Navbar';
import img from '../../src/images/Background2.png';
import BGLines from '../components/BGLines';

export default class Main extends Component {


  render() {
    const divStyle = {
      backgroundImage: `url("${img}")`,
      backgroundSize: 'cover'
    };
    return (
      <div style={divStyle} className="full-screen">
        <Navbar />
        {this.props.children}

        <div className="rectangle" />
        <BGLines />
      </div>
    );
  }
}

