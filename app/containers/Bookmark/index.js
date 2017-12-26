import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {
  selectBookmarkMoviesData,
  selectBookmarkMovieLoading
} from '../App/selectors';
import {Header, StarIcon, Container} from '../App/styles';
import MovieList from '../../components/MovieList';
import {Col} from 'react-bootstrap';
import Sidebar from '../Sidebar';
import messages from './messages';

const Bookmark = (props) => {
  return (
    <div>
      <div className="row">
        <Col md={8}>
          <Header>
            <StarIcon/>
            <FormattedMessage {...messages.yourBookmark}/>
          </Header>
          <Container>
            <MovieList
              moviesLoading={props.moviesLoading}
              moviesDataResults={props.bookmarkMovies}/>
          </Container>
        </Col>
        <Col md={4}>
          <Sidebar/>
        </Col>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    moviesLoading: selectBookmarkMovieLoading(),
    bookmarkMovies: selectBookmarkMoviesData()
  })
;


export default connect(mapStateToProps, null)(Bookmark);
