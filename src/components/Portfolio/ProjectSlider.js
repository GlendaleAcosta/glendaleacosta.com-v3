import React from 'react';
import Project from './Project';

let projects = [1, 2, 3, 4, 5];
const length = projects.length;
const first4Projects = projects.slice(0, 4);
const last4Projects = projects.slice((length - 4), length);

projects = last4Projects.concat(projects);
projects = projects.concat(first4Projects);

export default class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
    console.log(projects);
  }

  renderProjects = () => projects.map((project, i) => (
    <Project key={i} index={i} project={project} />
  ));

  render() {
    return (
      <div className="slider-container">
        <div style={{ transform: 'translateX( calc(-66vw - 80px))' }} className="project-slider">
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}
