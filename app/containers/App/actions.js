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

export const facebookSdkLoaded = () => {
  return {
    type: FACEBOOK_SDK_LOADED
  }
};

export const guestSession = () => {
  return {
    type: GUEST_SESSION
  }
};

export const loginFacebook = (currentUser) => {
  return {
    type: LOGIN_FACEBOOK,
    currentUser
  }
};

export const loginGoogle = () => {
  return {
    type: LOGIN_GOOGLE
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  }
};

export const bookmarkMovie = (movie) => {
  return {
    type: BOOKMARK_MOVIE,
    movie
  }
};

export const addBookmarkMovie = (movie) => {
  return {
    type: BOOKMARK_MOVIE_SUCCESS,
    movie
  }
};

export const removeBookmarkMovie = (movieId) => {
  return {
    type: REMOVE_BOOKMARK_MOVIE,
    movieId
  }
};

export const removedBookmarkMovie = (movieId) => {
  return {
    type: REMOVE_BOOKMARK_MOVIE_SUCCESS,
    movieId
  }
};


export const loadBookmarkMovies = () => {
  return {
    type: LOAD_BOOKMARK_MOVIES
  }
};

export const loadedBookmarkMovies = (data) => {
  return {
    type: LOAD_BOOKMARK_MOVIES_SUCCESS,
    data
  }
};
