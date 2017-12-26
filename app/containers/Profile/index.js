import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../App/selectors';
import {Col} from 'react-bootstrap';
import {Container, Header} from '../App/styles';
import {Img} from './styles';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header>
          Profile
        </Header>
        <Container>
          <Col md={4}>
            <Col xs={6} md={4}>
              <Img src={this.props.currentUser.picture.data.url}/>
            </Col>
          </Col>
          <Col md={8}>
          </Col>
          <div className="clearfix"></div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
