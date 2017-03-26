export function selectProject(position, projectNum, index, willAnimate) {
  return {
    type: 'SELECT_PROJECT',
    payload: {
      position,
      projectNum,
      index,
      willAnimate
    }
  };
}
