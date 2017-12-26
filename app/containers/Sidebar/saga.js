import {call, put, takeLatest} from 'redux-saga/effects';
import {MOVIE_API_KEY} from '../App/constants';
import {
  LOAD_POPULAR_MOVIES,
  LOAD_HOT_MOVIES
} from './constants';
import {
  popularMoviesLoadingError,
  popularMoviesLoaded,
  hotMoviesLoaded,
  hotMoviesLoadingError
}
  from './actions';
import request from '../../utils/request';

export function* getHotMovies() {
  try {
    const requestUrl = `http://api.themoviedb.org/3/movie/top_rated?api_key=${
      MOVIE_API_KEY
      }&language=en-US&page=1`;
    const movies = yield call(request, requestUrl);
    yield put(hotMoviesLoaded(movies.results));
  } catch (err) {
    yield put(hotMoviesLoadingError(err));
  }
}

export function* getPopularMovies() {
  try {
    const requestUrl = `http://api.themoviedb.org/3/movie/popular?api_key=${
      MOVIE_API_KEY
      }&language=en-US&page=1`;
    const movies = yield call(request, requestUrl);
    yield put(popularMoviesLoaded(movies.results));
  } catch (err) {
    yield put(popularMoviesLoadingError(err));
  }
}

export default function* hotMoviesData() {
  yield takeLatest(LOAD_POPULAR_MOVIES, getPopularMovies);
  yield takeLatest(LOAD_HOT_MOVIES, getHotMovies);
}
