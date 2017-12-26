import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectFacebookSdk} from '../../containers/App/selectors';
import {
  guestSession,
  loadBookmarkMovies,

  loginFacebook
} from '../../containers/App/actions';
import {connect} from 'react-redux';

class CheckAuth extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.facebookSdk.get('loaded')) {
      window.FB.getLoginStatus((response) => {
          if (response.status == 'connected') {
            FB.api('/me?fields=picture.type(large),name', (currentUser) => {
              this.props.dispatchLoginFacebook(currentUser);
              this.props.dispatchLoadBookmarkMovies();
            });
          }
          else {
            this.props.dispatchGuestSession()
          }
        }
      )
    }
  }

  render() {
    return (
      null
    )
  }
}

const mapStateToProps = createStructuredSelector({
  facebookSdk: selectFacebookSdk(),
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoginFacebook: (currentUser) => {
      dispatch(loginFacebook(currentUser));
    },
    dispatchGuestSession: () => {
      dispatch(guestSession());
    },
    dispatchLoadBookmarkMovies: () => {
      dispatch(loadBookmarkMovies());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckAuth);
