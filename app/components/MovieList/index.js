import React from 'react';
import LoadingArea from '../LoadingArea';
import Movie from '../Movie';
import {Relative} from './styles';

class MovieList extends React.Component {
  render() {
    return (
      <Relative>
        {
          this.props.moviesLoading ? <LoadingArea/> :
            this.props.moviesDataResults.map((movie, index) => (
              <Movie key={index} movie={movie}/>
            ))
        }
      </Relative>
    )
  }
}

export default MovieList;
