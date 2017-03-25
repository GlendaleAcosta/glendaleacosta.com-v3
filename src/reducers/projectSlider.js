export default function reducer(state = {
  position: '-66vw - 80px'
}, action) {
  switch (action.type) {
    case 'SELECT_PROJECT': {
      return { ...state, position: action.payload.position };
    }
    default: return state;
  }
}
