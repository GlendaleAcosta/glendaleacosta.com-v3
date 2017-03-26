import React from 'react';
import { connect } from 'react-redux';
import Project from './Project';
import movieWatchlist from '../../images/movie-watchlist-red2.png';
import vidswithfrens from '../../images/vidswithfrens3.png';
import vendingMachine from '../../images/Vending Machine App.png';

let projects = [
  {
    id: 1,
    name: 'Angular Movie Watchlist',
    technologies: ['Angularjs', 'Node', 'PostgresQL', 'TMDB REST API', 'JWT'],
    details: 'A fun movie app. Involves login, sign-up, authentication, dynamic routing, route protection, password encryption, and more. You can also save your favorite movies and add movies to your own watchlist for later.',
    github: 'https://github.com/GlendaleAcosta/angular-movie-watchlist',
    website: 'https://gentle-crag-19149.herokuapp.com/',
    image: '/images/movie-watchlist-red2.png'
  },
  {
    id: 2,
    name: 'vids-with-frens',
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
  }
];
const length = projects.length;
const first2Projects = projects.slice(0, 2);
const last2Projects = projects.slice((length - 2), length);

projects = last2Projects.concat(projects);
projects = projects.concat(first2Projects);

const fullLength = projects.length;

@connect(store => ({
  projectSlider: store.projectSlider
}))

export default class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor props');
  }

  renderProjects = () => projects.map((project, i) => (
    <Project key={i} fullLength={fullLength} index={i} project={project} />
  ));

  render() {
    return (
      <div className="slider-container">
        <div
          style={{
            transform: `translateX( calc(${this.props.projectSlider.position}))`,
            transition: `transform ${this.props.projectSlider.willAnimate ? 0.3 : 0}s ease-in-out`
          }}
          className="project-slider"
        >
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}
