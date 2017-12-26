import React from 'react';
import {FaBookmark} from 'react-icons/lib/fa';
import {connect} from 'react-redux';
import {Bookmark} from './styles';
import {
  selectBookmarkMoviesData,
  selectBookmarkMovieLoaded,
  selectCurrentUser
} from '../../containers/App/selectors';
import {createStructuredSelector} from 'reselect';
import {
  bookmarkMovie,
  removeBookmarkMovie
} from '../../containers/App/actions';

const BookmarkButton = (props) => {
  var bookmarkButton = props.currentUser && props.bookmarkMoviesLoaded ?
    props.bookmarkMoviesData.filter(bookmark => bookmark.id == props.movie.id).size ?
      (<Bookmark position={props.position} bookmarked onClick={() => props.dispatchRemoveBookmarkMovie(props.movie.id)}>
        <FaBookmark/>
      </Bookmark>)
      :
      (<Bookmark position={props.position} onClick={() => props.dispatchBookmarkMovie(props.movie)}>
        <FaBookmark/>
      </Bookmark>)
    : null;

  return (
    bookmarkButton
  )
};

const mapStateToProps = createStructuredSelector({
  bookmarkMoviesData: selectBookmarkMoviesData(),
  bookmarkMoviesLoaded: selectBookmarkMovieLoaded(),
  currentUser: selectCurrentUser()
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchBookmarkMovie: (movie) => {
      dispatch(bookmarkMovie(movie));
    },
    dispatchRemoveBookmarkMovie: (movieId) => {
      dispatch(removeBookmarkMovie(movieId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
