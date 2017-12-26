import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {Col} from 'react-bootstrap';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import {
  selectMovieSimpleDetailData,
  selectMovieSimpleDetailLoading
} from "./selectors";
import {loadMovieDetail} from "./actions";
import MovieDetailComponent from '../../components/MovieDetailComponent';
import {Header, Container, StarIcon} from '../App/styles';
import Sidebar from '../Sidebar';
import LoadingArea from '../../components/LoadingArea';
import {Relative} from '../App/styles';
import {FaSpinner, FaSpin} from 'react-icons/lib/fa';
import {animateScroll} from 'react-scroll';

class MovieDetail extends React.Component {
  componentWillMount() {
    animateScroll.scrollToTop({duration: 200});
    this.props.dispatchLoadSimpleMovieDetail(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id != this.props.match.params.id) {
      nextProps.dispatchLoadSimpleMovieDetail(nextProps.match.params.id);
      animateScroll.scrollToTop({duration: 200});
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <Col md={8}>
            <Header>
              <StarIcon/>
              {
                this.props.movieSimpleDetailLoading ? <FaSpinner/> :
                  this.props.movieSimpleDetailData.title
              }
            </Header>
            <Container>
              {
                this.props.movieSimpleDetailLoading ? <Relative><LoadingArea/></Relative> :
                  <MovieDetailComponent movieSimpleDetailData={this.props.movieSimpleDetailData}/>
              }
            </Container>
          </Col>
          <Col md={4}>
            <Sidebar/>
          </Col>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  movieSimpleDetailLoading: selectMovieSimpleDetailLoading(),
  movieSimpleDetailData: selectMovieSimpleDetailData()
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoadSimpleMovieDetail: (movieId) => {
      dispatch(loadMovieDetail(movieId));
    }
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'movieDetail', reducer});
const withSaga = injectSaga({key: 'movieDetail', saga});

export default compose(
  withReducer,
  withConnect,
  withSaga
)(MovieDetail);
