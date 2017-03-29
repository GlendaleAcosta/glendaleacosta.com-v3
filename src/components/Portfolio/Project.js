import React from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../../actions/sliderActions';

@connect(store => ({
  projectSlider: store.projectSlider
}))

export default class Project extends React.Component {

  clickedProject = () => {
    const isMobile = document.getElementsByTagName('html')["0"].clientWidth < 767;
    const that = this;
    const index = this.props.index;
    const projectNum = this.props.project.id;
    let position;

    if (isMobile) {
      position = `-${(this.props.index * 60) - 13}vw`;
    } else {
      position = `-${((this.props.index - 2) * 22) + 4}vw`;
    } 

    this.props.dispatch(
      selectProject(position, projectNum, index, true, this.props.project)
    );

    if (index < 4) {
      const newIndex = isMobile ? projectNum + index : projectNum + 1;
      setTimeout(() => {
        position = isMobile ? `-${(newIndex * 60) - 13}vw` : `-${(newIndex * 22) + 4}vw`;
        that.props.dispatch(
          selectProject(position, projectNum, newIndex, false, this.props.project)
        );
      }, 300);
    } else if (index > (this.props.fullLength - 5)) {
      const newIndex = isMobile ? projectNum + 3 : projectNum + 1;
      setTimeout(() => {
        position = isMobile ? `-${(newIndex * 60) - 13}vw` : `-${(newIndex * 22) + 4}vw`;
        that.props.dispatch(
          selectProject(position, projectNum, newIndex, false, this.props.project)
        );
      }, 300);
    }
  }

  render() {
    return (
      <div className="project-container">
        <div onClick={this.clickedProject} className="project">
          <div
            className="project-img"
            style={{ backgroundImage: `url("${this.props.project.image}")` }}
          />
        </div>
      </div>
    );
  }
}
