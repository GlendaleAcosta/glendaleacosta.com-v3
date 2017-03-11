import React from 'react';
import ScrollBtn from '../components/ScrollBtn';
import SocialNav from '../components/SocialNav';
import Hamburger from '../components/Hamburger';
// import GlendaleSVG from '../images/Glendale-Title.svg';
import GlendaleSVG from '../components/GlendaleSVG';

const github = 'https://github.com/GlendaleAcosta/glendaleacosta.com-v3';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  componentDidMount() {
    this.state = {
      testSVG: 'test-path'
    };
  }

  handleSVG = () => {
    // console.log('handling Svg');
    // this.setState({
    //   testSVG: 'test-path test-path-2'
    // });
  }

  render() {
    return (
      <div className="page">
        <div className="title">
          <GlendaleSVG
            testSVG={this.state.testSVG}
            loadSVG={this.handleSVG}
          />
        </div>

        <Hamburger />
        <SocialNav />
        <ScrollBtn />
        <a href={github} className="source-link">SOURCE</a>
      </div>
    );
  }
}

