import {createSelector} from 'reselect';

const selectGlobal = state => state.get('global');

const selectAuth = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('auth')
);

const selectFacebookSdk = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('facebookSdk')
);

const selectFacebookSdkLoaded = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['facebookSdk', 'loaded'])
);

const selectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['auth', 'currentUser'])
);

const selectBookmarkMovie = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookmarkMovies', 'bookmark', 'movie'])
);

const selectRemoveBookmarkMovieId = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookmarkMovies', 'removeBookmark', 'movieId'])
);


const selectBookmarkMovieLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookmarkMovies', 'loading'])
);

const selectBookmarkMovieLoaded = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookmarkMovies', 'loaded'])
);

const selectBookmarkMoviesData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookmarkMovies', 'data'])
);

export {
  selectGlobal,
  selectAuth,
  selectFacebookSdk,
  selectFacebookSdkLoaded,
  selectCurrentUser,
  selectBookmarkMovie,
  selectRemoveBookmarkMovieId,
  selectBookmarkMovieLoading,
  selectBookmarkMovieLoaded,
  selectBookmarkMoviesData
};
