import {fromJS, List} from 'immutable';
import {
  GUEST_SESSION,
  LOGIN_FACEBOOK,
  LOGIN_GOOGLE,
  FACEBOOK_SDK_LOADED,
  LOGOUT,
  BOOKMARK_MOVIE,
  BOOKMARK_MOVIE_SUCCESS,
  LOAD_BOOKMARK_MOVIES,
  LOAD_BOOKMARK_MOVIES_SUCCESS,
  REMOVE_BOOKMARK_MOVIE,
  REMOVE_BOOKMARK_MOVIE_SUCCESS
} from './constants';

const initialState = fromJS({
  facebookSdk: {
    loaded: false,
  },
  auth: {
    logged_in: false,
    logged_via: null,
    checking: true,
    currentUser: null
  },
  bookmarkMovies: {
    loading: false,
    loaded: false,
    data: [],
    bookmark: {
      movie: null,
      loading: false
    },
    removeBookmark: {
      movieId: null,
      loading: false
    }
  }
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_SDK_LOADED:
      return state.setIn(['facebookSdk', 'loaded'], true);
    case GUEST_SESSION:
      return state.setIn(['auth', 'checking'], false);
    case LOGIN_FACEBOOK:
      return state.setIn(['auth', 'logged_in'], true)
        .setIn(['auth', 'logged_via'], LOGIN_FACEBOOK)
        .setIn(['auth', 'currentUser'], action.currentUser)
        .setIn(['auth', 'checking'], false);
    case LOGOUT:
      return state.setIn(['auth', 'logged_in'], false)
        .setIn(['auth', 'logged_via'], null)
        .setIn(['auth', 'checking'], false)
        .setIn(['auth', 'currentUser'], null);
    case LOAD_BOOKMARK_MOVIES:
      return state.setIn(['bookmarkMovies', 'loading'], true);
    case LOAD_BOOKMARK_MOVIES_SUCCESS:
      return state.setIn(['bookmarkMovies', 'loading'], false)
        .setIn(['bookmarkMovies', 'data'], List(action.data))
        .setIn(['bookmarkMovies', 'loaded'], true);
    case BOOKMARK_MOVIE:
      return state.setIn(['bookmarkMovies', 'bookmark', 'loading'], true)
        .setIn(['bookmarkMovies', 'bookmark', 'movie'], action.movie);
    case BOOKMARK_MOVIE_SUCCESS:
      return state.setIn(['bookmarkMovies', 'bookmark', 'loading'], false)
        .setIn(['bookmarkMovies', 'bookmark', 'movie'], null)
        .updateIn(['bookmarkMovies', 'data'], data => data.indexOf(action.movie) === -1 ?
          data.push(action.movie) : data);
    case REMOVE_BOOKMARK_MOVIE:
      return state.setIn(['bookmarkMovies', 'removeBookmark', 'loading'], true)
        .setIn(['bookmarkMovies', 'removeBookmark', 'movieId'], action.movieId);
    case REMOVE_BOOKMARK_MOVIE_SUCCESS:
      return state.setIn(['bookmarkMovies', 'removeBookmark', 'loading'], false)
        .setIn(['bookmarkMovies', 'removeBookmark', 'movieId'], null)
        .updateIn(['bookmarkMovies', 'data'], data => data.filter(
          movie => movie.id != action.movieId
        ));
    default:
      return state;
  }
};

export default authReducer;
