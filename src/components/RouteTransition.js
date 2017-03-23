import React, { PropTypes } from 'react';
import { TransitionMotion, spring } from 'react-motion';

export default class RouteTransition extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
}

RouteTransition.propTypes = {
  pathname: PropTypes.string.isRequired,
};
