import {
  LOAD_POPULAR_MOVIES,
  LOAD_POPULAR_MOVIES_ERROR,
  LOAD_POPULAR_MOVIES_SUCCESS,
  LOAD_HOT_MOVIES,
  LOAD_HOT_MOVIES_ERROR,
  LOAD_HOT_MOVIES_SUCCESS,
} from './constants';

export function loadPopularMovies() {
  return {
    type: LOAD_POPULAR_MOVIES,
  };
}

export function popularMoviesLoaded(popularMovies) {
  return {
    type: LOAD_POPULAR_MOVIES_SUCCESS,
    popularMovies
  };
}

export function popularMoviesLoadingError(error) {
  return {
    type: LOAD_POPULAR_MOVIES_ERROR,
    error
  };
}

export function loadHotMovies() {
  return {
    type: LOAD_HOT_MOVIES,
  };
}

export function hotMoviesLoaded(hotMovies) {
  return {
    type: LOAD_HOT_MOVIES_SUCCESS,
    hotMovies
  };
}

export function hotMoviesLoadingError(error) {
  return {
    type: LOAD_HOT_MOVIES_ERROR,
    error
  };
}




