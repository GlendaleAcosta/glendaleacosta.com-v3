export default function reducer(state = {
  position: document.getElementsByTagName('html')["0"].clientWidth < 767 ? '-227vw' : '-48vw',
  projectNum: 1,
  index: 2,
  willAnimate: true,
  project: {
    id: 1,
    name: 'Angular Movie Watchlist',
    technologies: ['Angularjs', 'Node', 'PostgresQL', 'TMDB REST API', 'JWT'],
    details: 'A fun movie app. Involves login, sign-up, authentication, dynamic routing, route protection, password encryption, and more. You can also save your favorite movies and add movies to your own watchlist for later.',
    github: 'https://github.com/GlendaleAcosta/angular-movie-watchlist',
    website: 'https://gentle-crag-19149.herokuapp.com/',
    image: '/images/movie-watchlist-re3.png'
  }
}, action) {
  switch (action.type) {
    case 'SELECT_PROJECT': {
      return { ...state,
        position: action.payload.position,
        projectNum: action.payload.projectNum,
        index: action.payload.index,
        willAnimate: action.payload.willAnimate,
        project: action.payload.project
      };
    }
    default: return state;
  }
}
