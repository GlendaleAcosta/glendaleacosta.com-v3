import React, { Component } from 'react';
import img from '../../src/images/Background2.png';
import BGLines from '../components/BGLines';

const divStyle = {
  backgroundImage: `url("${img}")`,
  backgroundSize: 'cover'
};

export default class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let color;
    if (this.props.location.pathname === '/') {
      color = 'rgba(0,0,0,0)';
    } else if (this.props.location.pathname === '/portfolio') {
      color = 'rgba(90, 0, 0, 0.65)';
    } else if (this.props.location.pathname === '/contact') {
      color = '#232f46';
    }

    return (
      <div style={divStyle} className="full-screen">
        {this.props.children}
        { this.props.location.pathname === '/' ? <div className="rectangle" /> : null}
        { this.props.location.pathname === '/' ? <BGLines /> : null}
        <div style={{ backgroundColor: color }} className="bg-overlay" />;
      </div>
    );
  }
}

