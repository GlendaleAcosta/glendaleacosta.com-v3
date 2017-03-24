import React from 'react';
import { Link } from 'react-router';

export default class NavBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '0'
    };
  }

  onMouseEnter = () => {
    this.setState({
      height: '36px'
    });
  }

  onMouseLeave = () => {
    this.setState({
      height: '0'
    });
  }

  render() {
    return (
      <Link
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className="nav-link"
        to={this.props.link}
      >
        <div className="nav-box">
          <div className="nav-line-grey" >
            <div
              style={{ height: this.state.height }}
              className="nav-line-white"
            />
          </div>
          <p className="nav-text">{this.props.text}</p>
        </div>
      </Link>
    );
  }
}
