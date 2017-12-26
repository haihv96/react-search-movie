import {createSelector} from 'reselect';

const selectSidebar = (state) => state.get('sidebar');

const selectPopularMovies = () => createSelector(
  selectSidebar,
  (sidebarState) => sidebarState.get('popularMovies')
);

const selectPopularMoviesData = () => createSelector(
  selectSidebar,
  (sidebarState) => sidebarState.getIn(['popularMovies', 'data'])
);

const selectPopularMoviesLoading = () => createSelector(
  selectSidebar,
  (sidebarState) => sidebarState.getIn(['popularMovies', 'loading'])
);


const selectHotMovies = () => createSelector(
  selectSidebar,
  (sidebarState) => sidebarState.get('hotMovies')
);

const selectHotMoviesData = () => createSelector(
  selectSidebar,
  (sidebarState) => sidebarState.getIn(['hotMovies', 'data'])
);

const selectHotMoviesLoading = () => createSelector(
  selectSidebar,
  (sidebarState) => sidebarState.getIn(['hotMovies', 'loading'])
);

export {
  selectSidebar,
  selectPopularMovies,
  selectPopularMoviesData,
  selectPopularMoviesLoading,
  selectHotMovies,
  selectHotMoviesData,
  selectHotMoviesLoading
}
