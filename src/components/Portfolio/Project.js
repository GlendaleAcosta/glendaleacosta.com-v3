import React from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../../actions/sliderActions';

@connect(store => ({
  projectSlider: store.projectSlider
}))

export default class Project extends React.Component {

  clickedProject = () => {
    // console.log(`clicked project: ${this.props.project} `);
    const position = `-${(this.props.index - 1) * 22}vw - ${this.props.index * 20}px `;
    this.props.dispatch(
      selectProject(position)
    );
  }

  render() {
    return (
      <div onClick={this.clickedProject} className="project">
        <h1>{this.props.project}</h1>
      </div>
    );
  }
}

// Project.propTypes = {
//   index: React.PropTypes.number.isRequired,
//   project: React.PropTypes.number.isRequired,
//   dispatch: React.PropTypes.func.isRequired
// };

// -66vw - 80px
// 3(22vw) - 4(20)px
// this.props.index--) *(22vw) - this.props.index*(20)px

