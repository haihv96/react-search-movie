import {fromJS} from 'immutable';

import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './constants';

const initialState = fromJS({
  movies: {
    queryObject: null,
    loading: false,
    error: false,
    data: {
      results: [],
      totalPages: 0
    }
  }

});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return state.setIn(['movies', 'loading'], true)
        .setIn(['movies', 'queryObject'], action.queryObject);
    case LOAD_MOVIES_SUCCESS:
      return state.setIn(['movies', 'loading'], false)
        .setIn(['movies', 'data', 'results'], action.movies.results)
        .setIn(['movies', 'data', 'totalPages'], action.movies.total_pages);
    case LOAD_MOVIES_ERROR:
      return state.setIn(['movies', 'loading'], false)
        .setIn(['movies', 'error'], action.error);
    default:
      return state;
  }
}

export default homeReducer;
