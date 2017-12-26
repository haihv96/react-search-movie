import {call, put, select, takeLatest} from 'redux-saga/effects';
import {MOVIE_API_KEY} from "../App/constants";
import {LOAD_MOVIE_DETAIL} from './constants';
import {selectMovieId} from './selectors';
import request from '../../utils/request';
import {loadedMovieDetail, movieDetailLoadingError} from "./actions";

export function* getMovieSimpleDetail() {
  try {
    const movieId = yield select(selectMovieId());
    const movie = yield call(request, `http://api.themoviedb.org/3/movie/${movieId}?api_key=${
      MOVIE_API_KEY}`);
    yield put(loadedMovieDetail(movie));
  } catch (err) {
    yield put(movieDetailLoadingError(err));
  }
}

export default function* movieDetailSaga() {
  yield [
    takeLatest(LOAD_MOVIE_DETAIL, getMovieSimpleDetail),
  ];
}
