import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {FormattedMessage} from 'react-intl';
import {FaSignIn} from 'react-icons/lib/fa';
import {Modal, Button} from 'react-bootstrap';
import {compose} from 'redux';

import injectReducer from '../../utils/injectReducer';
import {selectModalIsShow} from './selectors';
import {loadBookmarkMovies, loginFacebook} from '../App/actions';
import {showModal, hideModal} from './actions';
import reducer from './reducer';
import messages from './messages';
import Firebase from 'firebase';

class LoginArea extends React.Component {
  componentDidMount() {
    FB.Event.subscribe('auth.login', (response) => {
      if (response.status == 'connected') {
        FB.api('/me?fields=picture.type(large),name', (currentUser) => {
          this.props.dispatchHideModal();
          this.props.dispatchLoginFacebook(currentUser);
          const usersRef = Firebase.database().ref('users');
          usersRef.child(currentUser.id).once('value', function (snapshot) {
            snapshot.val() ? null : usersRef.update({
              [currentUser.id]: {
                name: currentUser.name
              }
            })
          });
          this.props.dispatchLoadBookmarkMovies();
        });
      }
    });
  }

  handleCloseModal() {
    this.props.dispatchHideModal();
  }

  handleShowModal(e) {
    e.preventDefault();
    this.props.dispatchShowModal();
  }

  handleInitLoginFacebook() {
    FB.login(() => {
    }, {scope: 'public_profile,email'});
  }

  render() {
    return (
      <li>
        <div>
          <Modal show={this.props.is_show}>
            <Modal.Header onClick={this.handleCloseModal.bind(this)} closeButton>
              <Modal.Title>
                <FormattedMessage {...messages.loginViaCommunication}/>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Button bsStyle="primary" onClick={this.handleInitLoginFacebook}>
                <FormattedMessage {...messages.loginViaFacebook}/>
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleCloseModal.bind(this)}>
                <FormattedMessage {...messages.modalClose}/>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <a href="#" onClick={e => this.handleShowModal(e)}>
          <FaSignIn/>
          <FormattedMessage {...messages.login}/>
        </a>
      </li>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  is_show: selectModalIsShow()
});


const mapDispatchToProps = dispatch => {
  return {
    dispatchLoginFacebook(currentUser) {
      dispatch(loginFacebook(currentUser));
    },
    dispatchShowModal() {
      dispatch(showModal());
    },
    dispatchHideModal() {
      dispatch(hideModal());
    },
    dispatchLoadBookmarkMovies: () => {
      dispatch(loadBookmarkMovies());
    }
  }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'loginArea', reducer});

export default compose(withReducer, withConnect)(LoginArea);
