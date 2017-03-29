import React from 'react';
import { connect } from 'react-redux';
import { StaggeredMotion, spring } from 'react-motion';

import Project from './Project';

import movieWatchlist from '../../images/movie-watchlist-re3.png';
import vidswithfrens from '../../images/vidswithfrens3.png';
import vendingMachine from '../../images/Vending Machine App.png';
import ankroofing from '../../images/ankroofing.jpg';

let projects = [
  {
    id: 1,
    name: 'Angular Movie Watchlist',
    technologies: ['Angularjs', 'Node', 'PostgresQL', 'TMDB REST API', 'JWT'],
    details: 'A fun movie app. Involves login, sign-up, authentication, dynamic routing, route protection, password encryption, and more. You can also save your favorite movies and add movies to your own watchlist for later.',
    github: 'https://github.com/GlendaleAcosta/angular-movie-watchlist',
    website: 'https://gentle-crag-19149.herokuapp.com/',
    image: '/images/movie-watchlist-re3.png'
  },
  {
    id: 2,
    name: 'Vids With Frens',
    technologies: ['React', 'Redux', 'Socket.io', 'MongoDB'],
    details: "An app that syncs you and your friends' videos. It utilizes dynamic routing, dynamic websockets, a chat system, video search, and synced video player.",
    github: 'https://github.com/GlendaleAcosta/vids-with-frens',
    website: 'https://vidswithfrens.herokuapp.com/',
    image: '/images/vidswithfrens3.png'
  },
  {
    id: 3,
    name: 'Vending Machine App',
    technologies: ['Angularjs', 'PHP', 'MYSQL'],
    details: "A small app. You can select and buy drinks. There's also a save functionality to keep the history if purchased items.",
    github: 'https://github.com/GlendaleAcosta/Vending-Machine-App',
    website: 'https://infinite-fjord-58963.herokuapp.com/',
    image: '/images/Vending Machine App.png'
  },
  {
    id: 4,
    name: 'A & K Roofing',
    technologies: ['Wordpress', 'HTML', 'CSS', 'JavaScript'],
    details: 'A real commercial website to demonstrate abilities with wordpress and simple UI.',
    github: null,
    website: 'http://www.ankroofing.com/',
    image: '../../../images/ankroofing.jpg'
  },
];


const length = projects.length;
const first4Projects = projects.slice(0, 4);
const last4Projects = projects.slice((length - 4), length);

projects = last4Projects.concat(projects);
projects = projects.concat(first4Projects);

const fullLength = projects.length;

const startY = 300;
const startOpacity = 0;
const initialStiffness = 220;
const initialDamping = 31;
const finalStiffness = 220;
const finalDamping = 31;

const defaultStyles = [];

for (let i = 0; i < projects.length; i++) {
  defaultStyles.push({ y: startY, o: startOpacity });
}

@connect(store => ({
  projectSlider: store.projectSlider
}))

export default class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  getStyles = prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) =>
    i === 0
    ? { y: spring(0, { stiffness: initialStiffness, damping: initialDamping }), o: spring(1) }
    : {
      y: spring(prevInterpolatedStyles[i - 1].y,
        { stiffness: finalStiffness, damping: finalDamping }),
      o: spring(prevInterpolatedStyles[i - 1].o)
    })

  renderProjects = interpolatingStyles => (
    <div className="project-animation-container">
      {interpolatingStyles.map((style, i) => {
        const projectStyles = {
          WebkitTransform: `translate3d(0, ${style.y}%, 0)`,
          opacity: style.o
        };
        const coverStyles = {
          WebkitTransform: `translate3d(-50%, ${-style.y * 1.9}%, 0)`,
        }

        return (
          <div style={projectStyles}>
            <Project key={i} fullLength={fullLength} index={i} project={projects[i]} />
            <div style={coverStyles} className="project-cover" />
          </div>
        );
      })}
    </div>
    )

  render() {
    console.log(this.props.projectSlider.position);
    return (
      <div className="slider-container">
        <div
          style={{
            transform: `translateX( calc(${this.props.projectSlider.position}))`,
            transition: `transform ${this.props.projectSlider.willAnimate ? 0.3 : 0}s ease-in-out`
          }}
          className="project-slider"
        >
          <StaggeredMotion
            defaultStyles={defaultStyles}
            styles={this.getStyles}
          >
            {this.renderProjects}
          </StaggeredMotion>
        </div>
      </div>
    );
  }
}
