import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import {createStructuredSelector} from 'reselect';
import {selectAuth} from './selectors';
import Firebase from 'firebase';
import {facebookSDK} from '../../utils/authentication';
import {facebookSdkLoaded} from './actions';
import Auth from '../../components/CheckAuth';
import Home from '../Home';
import Bookmark from '../Bookmark';
import MovieDetail from '../MovieDetail';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer/Loadable';
import Notification from '../Notification';
import Profile from '../Profile';
import AuthRouteProtected from '../../components/AuthRouteProtected';

global.jQuery = require('jquery');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

class App extends React.Component {
  componentWillMount() {
    facebookSDK().then(() => {
        this.props.dispatchFacebookSdkLoaded();
      }
    );
    if (!Firebase.apps.length) {
      Firebase.initializeApp({
        apiKey: "AIzaSyB2jt_87gX5Dzd8KkP9eF5FqzxjC-_ZuwQ",
        authDomain: "reactsearchmovie.firebaseapp.com",
        databaseURL: "https://reactsearchmovie.firebaseio.com",
        projectId: "reactsearchmovie",
        storageBucket: "reactsearchmovie.appspot.com",
        messagingSenderId: "243356043923"
      });
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Auth/>
            <Notification/>
            <Route component={Navigation}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <AuthRouteProtected exact path="/profile" component={Profile}/>
              <AuthRouteProtected exact path="/bookmarks" component={Bookmark}/>
              <Route exact path="/movies/:id" component={MovieDetail}/>
              <Route component={NotFoundPage}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    )
  }
}

const
  mapStateToProps = createStructuredSelector({
    auth: selectAuth()
  });

const
  mapDispatchToProps = dispatch => {
    return {
      dispatchFacebookSdkLoaded: () => {
        dispatch(facebookSdkLoaded());
      }
    }
  };

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'app', saga});

export default compose(withConnect, withSaga)(App);
