import React from 'react';
import downArrow from '../images/Down-Arrow.svg';

const ScrollBtn = () => (
  <div className="scroll-btn-container">
    <p className="scroll-btn-text">SCROLL DOWN</p>
    <svg id="scroll-btn" width="62px" height="62px" viewBox="-1 -1 62 62">
      <path
        stroke="rgba(255,255,255,0.6)"
        strokeDasharray="190"
        strokeDashoffset="70"
        strokeWidth="2"
        fill="none"
        d="M0,30a30,30 0 1,0 60,0a30,30 0 1,0 -60,0"
      />
    </svg>
    <img className="down-arrow" alt="down-arrow" src={downArrow} />
  </div>
  );

export default ScrollBtn;
