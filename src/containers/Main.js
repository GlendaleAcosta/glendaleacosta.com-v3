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
    return (
      <div style={divStyle} className="full-screen">
          {this.props.children}
        <div className="rectangle" />
        <BGLines />
      </div>
    );
  }
}

