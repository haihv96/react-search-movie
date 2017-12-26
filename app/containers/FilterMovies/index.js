import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import QueryString from 'query-string';
import ReactPaginate from 'react-paginate';
import {FormattedMessage} from 'react-intl';
import {animateScroll} from 'react-scroll';
import messages from './messages';
import {
  loadMovies,
} from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import {
  selectMoviesQueryObject,
  selectMoviesLoading,
  selectMoviesDataResults,
  selectMoviesDataPages,
} from './selectors';
import FormFilterMovies from '../../components/FormFilterMovies';
import MovieList from '../../components/MovieList';

class FilterMovies extends React.Component {
  handleSubmitFilterMovies(filterMoviesParams) {
    filterMoviesParams = Object.assign({}, filterMoviesParams.toJS(), {'page': 1});
    this.props.history.push(`/?${QueryString.stringify(filterMoviesParams)}`);
    this.props.dispatchLoadMovies(filterMoviesParams);
  }

  componentWillMount() {
    this.props.dispatchLoadMovies(QueryString.parse(this.props.location.search));
  }

  handlePageClick = (data) => {
    animateScroll.scrollToTop({duration: 500});
    const newQueryObject = Object.assign({}, this.props.queryObject, {
      'page': data.selected + 1
    });
    this.props.history.push(`/?${QueryString.stringify(newQueryObject)}`);
    this.props.dispatchLoadMovies(newQueryObject);
  };

  render() {
    var reactPaginate = <ReactPaginate
      previousLabel={<FormattedMessage {...messages.previous}/>}
      nextLabel={<FormattedMessage {...messages.next}/>}
      breakLabel={<a href="#">...</a>}
      breakClassName={"break-me"}
      pageCount={this.props.moviesDataPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      forcePage={this.props.queryObject && this.props.queryObject.page ?
        this.props.queryObject.page - 1 : 0}
      onPageChange={this.handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}/>;
    return (
      <div>
        <FormFilterMovies
          onSubmit={this.handleSubmitFilterMovies.bind(this)}
          initialValues={this.props.queryObject}
        />
        <MovieList moviesDataResults={this.props.moviesDataResults}
                   moviesLoading={this.props.moviesLoading}/>
        {reactPaginate}
      </div>
    )
  }
}

const
  mapStateToProps = createStructuredSelector({
    queryObject: selectMoviesQueryObject(),
    moviesDataResults: selectMoviesDataResults(),
    moviesDataPages: selectMoviesDataPages(),
    moviesLoading: selectMoviesLoading(),
  });

function

mapDispatchToProps(dispatch) {
  return {
    dispatchLoadMovies: (queryObject) => {
      dispatch(loadMovies(queryObject));
    }
  };
}

const
  withConnect = connect(mapStateToProps, mapDispatchToProps);
const
  withReducer = injectReducer({key: 'filterMovies', reducer});
const
  withSaga = injectSaga({key: 'filterMovies', saga});

export default compose(withReducer,
  withConnect,
  withSaga
)(FilterMovies);
