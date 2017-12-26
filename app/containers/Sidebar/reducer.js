import {fromJS} from 'immutable';
import {
  LOAD_POPULAR_MOVIES,
  LOAD_POPULAR_MOVIES_SUCCESS,
  LOAD_POPULAR_MOVIES_ERROR,
  LOAD_HOT_MOVIES,
  LOAD_HOT_MOVIES_SUCCESS,
  LOAD_HOT_MOVIES_ERROR
} from './constants';

const initialState = fromJS({
  hotMovies: {
    loading: false,
    error: false,
    data: []
  },
  popularMovies: {
    loading: false,
    error: false,
    data: []
  }
});

function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_HOT_MOVIES:
      return state.setIn(['hotMovies', 'loading'], true);
    case LOAD_HOT_MOVIES_SUCCESS:
      return state.setIn(['hotMovies', 'loading'], false)
        .setIn(['hotMovies', 'data'], action.hotMovies);
    case LOAD_HOT_MOVIES_ERROR:
      return state.setIn(['hotMovies', 'loading'], false)
        .setIn(['hotMovies', 'error'], action.error);
    case LOAD_POPULAR_MOVIES:
      return state.setIn(['popularMovies', 'loading'], true);
    case LOAD_POPULAR_MOVIES_SUCCESS:
      return state.setIn(['popularMovies', 'loading'], false)
        .setIn(['popularMovies', 'data'], action.popularMovies);
    case LOAD_POPULAR_MOVIES_ERROR:
      return state.setIn(['popularMovies', 'loading'], false)
        .setIn(['popularMovies', 'error'], action.error);
    default:
      return state;
  }
}

export default sidebarReducer;
