import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR
} from './constants';

export const loadMovies = (queryObject) => {
  return {
    type: LOAD_MOVIES,
    queryObject
  }
};

export const moviesLoaded = (movies) => {
  return {
    type: LOAD_MOVIES_SUCCESS,
    movies
  }
};

export const moviesLoadingError = (error) => {
  return {
    type: LOAD_MOVIES_ERROR,
    error
  }
};
