import React from 'react';
import { connect } from 'react-redux';
import Project from './Project';

let projects = [1, 2, 3, 4, 5];
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
