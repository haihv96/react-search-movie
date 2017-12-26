import {createSelector} from 'reselect';

const selectFilterMovies = (state) => state.get('filterMovies');

const selectMovies = () => createSelector(
  selectFilterMovies,
  (filterMoviesState) => filterMoviesState.get('movies')
);

const selectMoviesDataResults = () => createSelector(
  selectFilterMovies,
  (filterMoviesState) => filterMoviesState.getIn(['movies', 'data', 'results'])
);

const selectMoviesDataPages = () => createSelector(
  selectFilterMovies,
  (filterMoviesState) => filterMoviesState.getIn(['movies', 'data', 'totalPages'])
);

const selectMoviesLoading = () => createSelector(
  selectFilterMovies,
  (filterMoviesState) => filterMoviesState.getIn(['movies', 'loading'])
);

const selectMoviesQueryObject = () => createSelector(
  selectFilterMovies,
  (filterMoviesState) => filterMoviesState.getIn(['movies', 'queryObject'])
);

export {
  selectFilterMovies,
  selectMoviesQueryObject,
  selectMoviesLoading,
  selectMovies,
  selectMoviesDataResults,
  selectMoviesDataPages,
}
