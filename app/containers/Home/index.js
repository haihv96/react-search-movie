import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Col} from 'react-bootstrap';
import {Container, Header} from '../App/styles';
import {StarIcon} from '../App/styles';
import Sidebar from '../Sidebar';
import FilterMovies from '../FilterMovies';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Col md={8}>
            <Header>
              <StarIcon/>
              <FormattedMessage {...messages.filterMovies}/>
            </Header>
            <Container>
              <FilterMovies history={this.props.history} location={this.props.location}/>
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

export default Home;
