import React from 'react';
import classNames from 'classnames';

export default class GlendaleSVG extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathClass: classNames({
        'test-path': true,
        'test-path-2': false
      })
    };
  }
  componentDidMount() {
    const that = this;
    setTimeout(() => {
      that.setState({
        pathClass: classNames({
          'test-path': true,
          'test-path-2': true
        })
      });
    }, 200);
  }

  render() {
    return (
      <svg id="GlendaleSVG" width="284px" height="61px" viewBox="-1 -1 285 62" version="1.1">
        <g id="Glendale" fill="none" stroke="#FFFFFF" strokeWidth="1">
          <g id="G">
            <path className={this.state.pathClass} d="M49.469621,19.2881298 C49.469621,19.2881298 48.0136982,0.853290505 26.2277104,0.853290505 C4.44172252,0.853290505 -0.663110863,21.1140538 0.0710173121,32.8236914 C0.805145487,44.533329 6.54779128,58.1945727 25.2275342,60.1626244 C43.907277,62.1306762 52.2974812,42.4249131 50.294781,33.0333584" id="Path-11" />
            <path className={this.state.pathClass} d="M 50.2513206 58.5070186 50.2459845 33.1569308 27.3109476 32.9374072" />
          </g>
          <g id="l" transform="translate(60.000000, 2.000000)">

            <path className={this.state.pathClass} d="M1,2.84217094e-14 L1,57.3149195" id="Path-13" />
          </g>
          <g id="e" transform="translate(69.000000, 17.000000)">
            <path className={this.state.pathClass} d="M1,21 L36,21 C36,21 36,-2.84217094e-14 18,-2.84217094e-14 C7.10542736e-15,-2.84217094e-14 1,21 1,21 Z" id="Path-17" />
            <path className={this.state.pathClass} d="M1,21 C1,21 -1.32376679e-06,42 17,42 C34.0000013,42 33.9999987,31 35,28" id="Path-18" />
          </g>
          <g id="n" transform="translate(112.000000, 17.000000)">
            <path className={this.state.pathClass} d="M1,1 L1,42" id="Path-20" />
            <path className={this.state.pathClass} d="M1,18 C1,18 2,-5.85444587e-10 17,-1.98923517e-12 C32,5.81466097e-10 32,14 32,18 L32,42" id="Path-21" />
          </g>
          <g id="d" transform="translate(151.000000, 2.000000)">
            <path className={this.state.pathClass} d="M36,33 C36,33 34,15 18,15 C2,15 1,35 1,35 C0.999999997,35 -1.32302906e-06,56 17,58 C34.0000013,60 36.0000025,39 36,39" id="Path-19" />
            <path className={this.state.pathClass} d="M36,0 L36,57.1401785" id="Path-18" />
          </g>
          <g id="a" transform="translate(196.000000, 17.000000)">
            <path className={this.state.pathClass} d="M2.84540458,13.1965691 C2.84540458,13.1965691 2.75386233,0.359165134 17.3938471,0.622341018 C32.033832,0.885516901 30.7687085,13.1855994 30.7687095,13.6801406 C30.7687105,14.1746818 30.7687095,37.3717334 30.7687095,37.3717334 C30.7687095,37.3717334 30.5304488,41.5856013 35.9383584,41.1663673" id="Path-20" />
            <path className={this.state.pathClass} d="M30.7875844,13.6101702 C30.7875844,13.6101702 29.4325525,16.6317895 28.506585,17.5355814 C27.5806176,18.4393734 26.3449668,19.6078832 16.7494706,20.3171305 C7.15397443,21.0263778 1.40672895,20.4964046 0.235800944,31.1891327 C-0.935127058,41.8818608 10.3896696,42.388679 14.5490848,42.3886802 C18.7085,42.3886815 25.2694848,38.5729689 27.4081752,35.1872547 C29.5468656,31.8015405 30.7875844,28.8555954 30.7875844,28.8555954" id="Path-21" />
          </g>
          <g id="l-2" transform="translate(237.000000, 1.000000)">
            <path className={this.state.pathClass} d="M1.31964583,0.916708029 L1.31964583,57.9343372" id="Path-22" />
          </g>
          <g id="e-2" transform="translate(246.000000, 17.000000)">
            <path className={this.state.pathClass} d="M1,21 L36,21 C36,21 36,-2.84217094e-14 18,-2.84217094e-14 C7.10542736e-15,-2.84217094e-14 1,21 1,21 Z" id="Path-17" />
            <path className={this.state.pathClass} d="M1,21 C1,21 -1.32376679e-06,42 17,42 C34.0000013,42 33.9999987,31 35,28" id="Path-18" />
          </g>
        </g>
      </svg>
    );
  }
}

