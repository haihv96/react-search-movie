import React from 'react';

import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Col} from 'react-bootstrap';
import {
  Thumbnail,
  SimpleDetail,
  Title,
  MoreInfo,
  TitleMoreInfo,
  ContentMoreInfo,
  H4
} from './styles';
import {convertDate} from '../../utils/movies';

const MovieDetailComponent = ({movieSimpleDetailData}) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Col md={5}>
            <Thumbnail src={`https://image.tmdb.org/t/p/w640${movieSimpleDetailData.poster_path}`}/>
          </Col>
          <Col md={7}>
            <SimpleDetail>
              <Title>{movieSimpleDetailData.title}</Title>
              <MoreInfo>
                <TitleMoreInfo>
                  <FormattedMessage {...messages.votePoint}/>:
                </TitleMoreInfo>
                <ContentMoreInfo>
                  {movieSimpleDetailData.vote_average}
                </ContentMoreInfo>
              </MoreInfo>
              <MoreInfo>
                <TitleMoreInfo>
                  <FormattedMessage {...messages.voteCount}/>:
                </TitleMoreInfo>
                <ContentMoreInfo>
                  {movieSimpleDetailData.vote_count}
                </ContentMoreInfo>
              </MoreInfo>
              <MoreInfo>
                <TitleMoreInfo>
                  <FormattedMessage {...messages.releaseDate}/>:
                </TitleMoreInfo>
                <ContentMoreInfo>
                  {convertDate(movieSimpleDetailData.release_date)}
                </ContentMoreInfo>
              </MoreInfo>
              <H4><FormattedMessage {...messages.overview}/></H4>
              <p>
                {movieSimpleDetailData.overview}
              </p>
            </SimpleDetail>
          </Col>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailComponent;
