import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';

// animation config
const startY = 300;
const startOpacity = 0;
const initialStiffness = 320;
const initialDamping = 60;
const finalStiffness = 320;
const finalDamping = 60;
const defaultStyles = [
  { y: startY, o: startOpacity },
  { y: startY, o: startOpacity },
  { y: startY, o: startOpacity }
];

const Links = [
  { link: 'https://www.facebook.com/glendale.acosta',
    name: 'FACEBOOK' },
  { link: 'https://www.linkedin.com/in/glendale-acosta-608b88116/',
    name: 'LINKEDIN' },
  { link: 'https://github.com/GlendaleAcosta',
    name: 'GITHUB' }
];

export default class SocialNav extends React.Component {
  render() {
    return (
      <StaggeredMotion
        defaultStyles={defaultStyles}
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => i === 0
              ? { y: spring(0, { stiffness: initialStiffness, damping: initialDamping }), o: spring(1) }
              : {
                y: spring(prevInterpolatedStyles[i - 1].y, { stiffness: finalStiffness, damping: finalDamping }),
                o: spring(prevInterpolatedStyles[i - 1].o)
              })}
      >
        {interpolatingStyles =>
          <div className="social-nav">
            {interpolatingStyles.map((style, i) => {
              const linkStyles = {
                WebkitTransform: `translate3d(0, ${style.y}%, 0)`,
                opacity: style.o
              };
              return <a href={Links[i].link} key={i} style={linkStyles}>{Links[i].name}</a>;
            })}
          </div>
          }
      </StaggeredMotion>

    );
  }
}

