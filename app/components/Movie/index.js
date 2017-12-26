import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Link} from 'react-router-dom';
import {convertDate} from "../../utils/movies";
import BookmarkButton from '../BookmarkButton';
import {
  Thumbnail,
  NoImage,
  MovieContainer,
  ThumbnailContainer,
  Description,
  Title,
  MoreInfo,
  MovieGrid,
  Rate,
  Star,
  H4
} from './styles';

const Movie = ({movie}) => {
  return (
    <MovieGrid>
      <MovieContainer>
        <Link to={`/movies/${movie.id}`}>
          <ThumbnailContainer>
            {
              movie.poster_path ?
                <Thumbnail src={`https://image.tmdb.org/t/p/w640${movie.poster_path}`}/>
                : <NoImage/>
            }
            <Rate>{movie.vote_average.toFixed(1)}</Rate>
            <Star/>
          </ThumbnailContainer>
        </Link>
        <Description>
          <Link to={`/movies/${movie.id}`}>
            <Title>
              <H4>{movie.title}</H4>
            </Title>
          </Link>
          <MoreInfo>
            {movie.vote_count} <FormattedMessage {...messages.votes}/> <br/>
            <FormattedMessage {...messages.released}/>: {convertDate(movie.release_date)}
          </MoreInfo>
        </Description>
        <BookmarkButton position="absolute" movie={movie}/>
      </MovieContainer>
    </MovieGrid>
  );
};

export default Movie;
