import React from 'react';

import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {convertDate} from '../../utils/movies';

import {
  MovieThumbContainer,
  Thumbnail,
  Description,
  Title,
  CustomLink,
  MoreInfo
} from './styles';
import BookmarkButton from '../BookmarkButton';
import {Link} from 'react-router-dom';

const MovieThumb = ({movie}) => (
  <MovieThumbContainer>
    <CustomLink to={`/movies/${movie.id}`}>

      <Thumbnail src={`https://image.tmdb.org/t/p/w640${movie.poster_path}`}/>
    </CustomLink>
    <Description>
      <CustomLink to={`/movies/${movie.id}`}>
        <Title>
          {movie.title}
        </Title>
      </CustomLink>
      <MoreInfo>
        <div><FormattedMessage {...messages.voteCount}/>: {movie.vote_count}</div>
        <div><FormattedMessage {...messages.voteAverage}/>: {movie.vote_average}</div>
        <div><FormattedMessage {...messages.released}/>: {convertDate(movie.release_date)}</div>
      </MoreInfo>
    </Description>
    <BookmarkButton movie={movie}/>
  </MovieThumbContainer>
);

export default MovieThumb;
