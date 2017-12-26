import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import {
  loadPopularMovies,
  loadHotMovies
} from './actions';
import {
  selectHotMoviesData,
  selectHotMoviesLoading,
  selectPopularMoviesData,
  selectPopularMoviesLoading
} from './selectors';
import {
  selectBookmarkMovieLoading,
  selectBookmarkMoviesData,
  selectCurrentUser
} from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Container, Header} from '../App/styles';
import {StarIcon} from '../App/styles';
import MovieThumbList from '../../components/MovieThumbList';

class Sidebar extends React.Component {
  componentWillMount() {
    this.props.dispatchLoadPopularMovies();
    this.props.dispatchLoadHotMovies();
  }

  render() {
    return (
      <div>
        {
          this.props.currentUser ?
            <div>
              <Header>
                <StarIcon/>
                <FormattedMessage {...messages.yourBookmark}/>
              </Header>
              <MovieThumbList
                moviesData={this.props.bookmarkMoviesData.filter((movie, index) => index < 10)}
                moviesLoading={this.props.bookmarkMoviesLoading}
              />
            </div> : null
        }
        <Header>
          <StarIcon/>
          <FormattedMessage {...messages.popularMovies}/>
        </Header>
        <MovieThumbList
          moviesData={this.props.popularMoviesData}
          moviesLoading={this.props.popularMoviesLoading}
        />
        <Header>
          <StarIcon/>
          <FormattedMessage {...messages.topRates}/>
        </Header>
        <MovieThumbList
          moviesData={this.props.hotMoviesData}
          moviesLoading={this.props.hotMoviesLoading}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  hotMoviesData: selectHotMoviesData(),
  hotMoviesLoading: selectHotMoviesLoading(),
  popularMoviesData: selectPopularMoviesData(),
  popularMoviesLoading: selectPopularMoviesLoading(),
  bookmarkMoviesData: selectBookmarkMoviesData(),
  bookmarkMoviesLoading: selectBookmarkMovieLoading(),
  currentUser: selectCurrentUser()
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadHotMovies: () => {
      dispatch(loadHotMovies());
    },
    dispatchLoadPopularMovies: () => {
      dispatch(loadPopularMovies());
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'sidebar', reducer});
const withSaga = injectSaga({key: 'sidebar', saga});

export default compose(
  withReducer,
  withConnect,
  withSaga
)(Sidebar);
