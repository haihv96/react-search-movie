import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import NotificationSystem from 'react-notification-system';
import {createStructuredSelector} from 'reselect';
import {selectFacebookSdk} from '../App/selectors';
import messages from "./messages";

class Notification extends React.Component {
  componentDidMount() {
    if (this.props.facebookSdk.get('loaded')) {
      this.listenAuthStatusChange();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.facebookSdk.get('loaded')) {
      this.listenAuthStatusChange();
    }
  }

  listenAuthStatusChange() {
    FB.Event.subscribe('auth.statusChange', (response) => {
      if (response.status == 'connected' && this.refs.notification) {
        this.refs.notification.addNotification({
          title: <FormattedMessage {...messages.loginTitle}/>,
          message: <FormattedMessage {...messages.loginMessage}/>,
          level: 'success',
          position: 'tl',
          autoDismiss: 2
        });
      }
    });
  }

  render() {
    return (
      <div>
        <NotificationSystem ref={'notification'}/>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  facebookSdk: selectFacebookSdk(),
});


export default connect(mapStateToProps, null)(Notification);

