import React from 'react';
import { connect } from 'react-redux';

@connect(store => ({
  projectSlider: store.projectSlider
}))

export default class CircleOfDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTech = () => {
    let string = '';
    const lastIndex = this.props.projectSlider.project.technologies.length;
    this.props.projectSlider.project.technologies.map((technology, index) => {
      string = `${string} ${technology}${index === (lastIndex-1) ? '' : ','}`;
    });
    return string;
  };

  render() {
    const { project } = this.props.projectSlider;

    return (
      <div className="project-circle" >
        <div className="project-number">{project.id}/5</div>

        <p className="project-tech"><span>Technologies:</span> <br /> {this.renderTech()}</p>
        <h4 className="project-title">{project.name}</h4>
        <div className="link-container">
          <a href={project.github} className="project-source">Source</a>
          <a href={project.website || '#'} className="project-link">Website</a>
        </div>
      </div>
    );
  }
}
