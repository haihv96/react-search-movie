import {fromJS} from 'immutable';
import {
  LOAD_MOVIE_DETAIL,
  LOAD_MOVIE_DETAIL_SUCCESS,
  LOAD_MOVIE_DETAIL_ERROR
} from './constants';

const initialState = fromJS({
  movieId: null,
  movieSimpleDetail: {
    loading: true,
    error: null,
    data: null
  }
});

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIE_DETAIL:
      return state.setIn(['movieSimpleDetail', 'loading'], true)
        .set('movieId', action.movieId);
    case LOAD_MOVIE_DETAIL_SUCCESS:
      return state.setIn(['movieSimpleDetail', 'loading'], false)
        .setIn(['movieSimpleDetail', 'data'], action.data);
    case LOAD_MOVIE_DETAIL_ERROR:
      return state.setIn(['movieSimpleDetail', 'loading'], false)
        .setIn(['movieSimpleDetail', 'error'], action.error);
    default:
      return state;
  }
};

export default movieDetailReducer;
