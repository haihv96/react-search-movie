import {call, put, select, takeLatest} from 'redux-saga/effects';
import {
  selectBookmarkMovie,
  selectRemoveBookmarkMovieId,
  selectCurrentUser
} from './selectors';
import {
  BOOKMARK_MOVIE,
  REMOVE_BOOKMARK_MOVIE,
  LOAD_BOOKMARK_MOVIES
} from './constants';
import {
  addBookmarkMovie,
  removedBookmarkMovie,
  loadedBookmarkMovies
} from './actions';
import {
  bookmark,
  removeBookmark,
  getBookmarkRequest
} from '../../utils/firebase';

export function* bookmarkMovie() {
  try {
    const currentUser = yield select(selectCurrentUser());
    const movie = yield select(selectBookmarkMovie());
    yield call(bookmark, currentUser.id, movie);
    yield put(addBookmarkMovie(movie));
  } catch (err) {
    console.log('bookmark error');
  }
}


export function* removeBookmarkMovieSaga() {
  try {
    const currentUser = yield select(selectCurrentUser());
    const movieId = yield select(selectRemoveBookmarkMovieId());
    yield call(removeBookmark, currentUser.id, movieId);
    yield put(removedBookmarkMovie(movieId.toString()));
  } catch (err) {
    console.log('remove bookmark error');
  }
}

export function* getBookmarkMovies() {
  try {
    const currentUser = yield select(selectCurrentUser());
    const data = yield call(getBookmarkRequest, currentUser.id);
    yield put(loadedBookmarkMovies(data));
  } catch (err) {
    console.log('load bookmark error');
  }
}

export default function* bookmarkMoviesSaga() {
  yield [
    takeLatest(BOOKMARK_MOVIE, bookmarkMovie),
    takeLatest(REMOVE_BOOKMARK_MOVIE, removeBookmarkMovieSaga),
    takeLatest(LOAD_BOOKMARK_MOVIES, getBookmarkMovies)
  ];
}
