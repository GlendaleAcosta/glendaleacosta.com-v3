export function selectProject(position, projectNum, index, willAnimate, project) {
  return {
    type: 'SELECT_PROJECT',
    payload: {
      position,
      projectNum,
      index,
      willAnimate,
      project
    }
  };
}
