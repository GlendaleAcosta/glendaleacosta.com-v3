export function selectProject(position) {
  return {
    type: 'SELECT_PROJECT',
    payload: {
      position
    }
  };
}
