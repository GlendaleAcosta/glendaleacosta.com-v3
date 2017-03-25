import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  clickedProject = () => {
    console.log(`clicked project: ${this.props.project} `);
    console.log(`${ (this.props.index -1) * 22}vw - ${this.props.index * 20}px `);
  }

  render() {
    return (
      <div onClick={this.clickedProject} className="project">
        <h1>{this.props.project}</h1>
      </div>
    );
  }
}

// -66vw - 80px
// 3(22vw) - 4(20)px
// this.props.index--) *(22vw) - this.props.index*(20)px

