import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Link} from 'react-router-dom';
import {Navbar, Ul} from './styles';
import {connect} from 'react-redux';
import LoginArea from '../../containers/LoginArea';
import ProfileToggle from '../ProfileToggle';
import MyBookmark from './MyBookmark';
import {createStructuredSelector} from 'reselect';
import {selectAuth} from '../../containers/App/selectors';

class Navigation extends React.Component {
  render() {
    var navbarState = this.props.auth.get('checking') ?
      null : this.props.auth.get('logged_in') ? <ProfileToggle/> : <LoginArea/>;
    var myBookmark = this.props.auth.get('logged_in') ? <MyBookmark location={this.props.location}/> : null;
    return (
      <div>
        <Navbar className="navbar navbar-inverse item" noRadius>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">
                <FormattedMessage {...messages.appName}/>
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className={this.props.location.pathname === '/' ? 'active' : null}>
                  <Link to="/">
                    <FormattedMessage {...messages.home}/>
                  </Link>
                </li>
                {myBookmark}
              </ul>
              <Ul className="nav navbar-nav navbar-right">
                {navbarState}
              </Ul>
            </div>
          </div>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  auth: selectAuth()
});

export default connect(mapStateToProps, null)(Navigation);
