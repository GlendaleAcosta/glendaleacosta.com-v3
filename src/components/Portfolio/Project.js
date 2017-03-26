import React from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../../actions/sliderActions';

@connect(store => ({
  projectSlider: store.projectSlider
}))

export default class Project extends React.Component {

  clickedProject = () => {
    const that = this;
    let position = `-${(this.props.index - 1) * 22}vw - ${this.props.index * 20}px `;
    const projectNum = this.props.project.id;
    const index = this.props.index;

    this.props.dispatch(
      selectProject(position, projectNum, index, true)
    );

    if (this.props.index < 2) {
      const newIndex = this.props.project.id + 1;
      setTimeout(() => {
        position = `-${(newIndex - 1) * 22}vw - ${newIndex * 20}px `;
        that.props.dispatch(
          selectProject(position, projectNum, newIndex, false)
        );
      }, 300);
    } else if (this.props.index > (this.props.fullLength - 3)) {
      const newIndex = this.props.project.id + 1;
      setTimeout(() => {
        position = `-${(newIndex - 1) * 22}vw - ${newIndex * 20}px `;
        that.props.dispatch(
          selectProject(position, projectNum, newIndex, false)
        );
      }, 300);
    }
  }

  render() {
    return (
      <div onClick={this.clickedProject}
        style={{backgroundImage: `url("${this.props.project.image}")`}}
        className="project"
      >
        <div className="project-overlay">
          <h4 className="project-name">{this.props.project.name}</h4>
        </div>
      </div>
    );
  }
}
