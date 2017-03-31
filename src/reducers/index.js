import { combineReducers } from 'redux';
import projectSlider from './projectSlider';
import menu from './menu';

const reducers = combineReducers({
  projectSlider,
  menu
});

export default reducers;
