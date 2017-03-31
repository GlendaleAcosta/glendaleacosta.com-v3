export default function reducer(state = {
  menuIsOpen: false
}, action) {
  switch (action.type) {
    case 'OPEN_MENU': {
      return { ...state, menuIsOpen: action.payload };
    }
    case 'CLOSE_MENU': {
      return { ...state, menuIsOpen: action.payload };
    }
    default: return state;
  }
}
