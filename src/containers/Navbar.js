import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import NavBox from '../components/Layout/NavBox';

const NavBoxes = [
  { link: '/', text: 'Home' },
  { link: '/portfolio', text: 'Portfolio' },
  { link: '/contact', text: 'Contact' }
];

// import React from 'react';

// animation config
const startX = 150;
const startOpacity = 0;
const initialStiffness = 320;
const initialDamping = 60;
const finalStiffness = 320;
const finalDamping = 60;
const defaultStyles = [
  { x: startX, o: startOpacity },
  { x: startX, o: startOpacity },
  { x: startX, o: startOpacity }
];


export default class Navbar extends React.Component {
  render() {
    return (
      <StaggeredMotion
        defaultStyles={defaultStyles}
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => i === 0
              ? { x: spring(0, { stiffness: initialStiffness, damping: initialDamping }), o: spring(1) }
              : {
                x: spring(prevInterpolatedStyles[i - 1].x, { stiffness: finalStiffness, damping: finalDamping }),
                o: spring(prevInterpolatedStyles[i - 1].o)
              })}
      >
        {interpolatingStyles =>
          <div className="navbar">
            {interpolatingStyles.map((style, i) => {
              const linkStyles = {
                WebkitTransform: `translate3d(${style.x}%, 0, 0)`,
                transform: `translate3d(${style.x}%, 0, 0)`,
                opacity: style.o
              };
              return (
                <div key={i} style={linkStyles}>
                  <NavBox link={NavBoxes[i].link} text={NavBoxes[i].text} />
                </div>
              );
            })}
          </div>
          }
      </StaggeredMotion>

    );
  }
}

