import React from 'react';
import MovieThumb from '../MovieThumb';
import LoadingArea from '../LoadingArea';
import {MoviesContainer, Relative} from './styles';

class MovieThumbList extends React.Component {
  render() {
    var movieThumbList = this.props.moviesLoading ? <Relative><LoadingArea/></Relative> :
      <MoviesContainer>
        {
          this.props.moviesData.map((movie, index) => (
            <MovieThumb key={index} movie={movie}/>
          ))
        }
      </MoviesContainer>;

    return (
      movieThumbList
    )
  }
}

export default MovieThumbList;
