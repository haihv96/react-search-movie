import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectAuth} from '../../containers/App/selectors';
import {Route, Redirect} from 'react-router-dom';

const AuthRouteProtected = (props) => {
  return (
    props.auth.get('checking') ? null :
      props.auth.get('logged_in') ? <Route {...props}/> : <Redirect to="/"/>
  )
};

const mapStateToProps = createStructuredSelector({
  auth: selectAuth()
});

export default connect(mapStateToProps, null)(AuthRouteProtected);
