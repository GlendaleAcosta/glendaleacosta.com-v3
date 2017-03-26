export default function reducer(state = {
  position: '-22vw - 40px',
  projectNum: 1,
  index: 2,
  willAnimate: true
}, action) {
  switch (action.type) {
    case 'SELECT_PROJECT': {
      return { ...state,
        position: action.payload.position,
        projectNum: action.payload.projectNum,
        index: action.payload.index,
        willAnimate: action.payload.willAnimate
      };
    }
    default: return state;
  }
}
