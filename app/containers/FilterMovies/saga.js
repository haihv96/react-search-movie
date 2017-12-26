import {call, put, select, takeLatest} from 'redux-saga/effects';
import {MOVIE_API_KEY} from '../App/constants';
import {selectMoviesQueryObject} from './selectors';
import {LOAD_MOVIES} from './constants';
import {moviesLoaded, moviesLoadingError} from './actions';
import request from '../../utils/request';
import QueryString from 'query-string';

export function* getMovies() {
  try {
    const query = QueryString.stringify(yield select(selectMoviesQueryObject()));
    const requestUrl = `http://api.themoviedb.org/3/discover/movie?api_key=${
      MOVIE_API_KEY}&${query}`;
    const movies = yield call(request, requestUrl);
    yield put(moviesLoaded(movies));
  } catch (err) {
    yield put(moviesLoadingError(err));
  }
}

export default function* moviesData() {
  yield takeLatest(LOAD_MOVIES, getMovies);
}
