export function openMenu() {
  return {
    type: 'OPEN_MENU',
    payload: true
  };
}

export function closeMenu() {
  return {
    type: 'CLOSE_MENU',
    payload: false
  };
}
