import {createSelector} from 'reselect';

const movieDetailState = (state) => state.get('movieDetail');

const selectMovieDetail = () => createSelector(
  movieDetailState,
  (movieDetailState) => movieDetailState
);

const selectMovieSimpleDetailLoading = () => createSelector(
  movieDetailState,
  (movieDetailState) => movieDetailState.getIn(['movieSimpleDetail', 'loading'])
);

const selectMovieSimpleDetailData = () => createSelector(
  movieDetailState,
  (movieDetailState) => movieDetailState.getIn(['movieSimpleDetail', 'data'])
);

const selectMovieId = () => createSelector(
  movieDetailState,
  (movieDetailState) => movieDetailState.get('movieId')
);

export {
  selectMovieDetail,
  selectMovieSimpleDetailData,
  selectMovieSimpleDetailLoading,
  selectMovieId
}
