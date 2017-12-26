import {
  LOAD_MOVIE_DETAIL,
  LOAD_MOVIE_DETAIL_ERROR,
  LOAD_MOVIE_DETAIL_SUCCESS
} from './constants';

export const loadMovieDetail = (movieId) => {
  return {
    type: LOAD_MOVIE_DETAIL,
    movieId
  };
};

export const loadedMovieDetail = (data) => {
  return {
    type: LOAD_MOVIE_DETAIL_SUCCESS,
    data
  };
};

export const movieDetailLoadingError = (error) => {
  return {
    type: LOAD_MOVIE_DETAIL_ERROR,
    error
  };
};

