import React from 'react';
import {FormattedMessage} from 'react-intl';
import './styles.css';
import messages from './messages';

export default class NotFound extends React.PureComponent {
  render() {
    return (
      <h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error-template">
                <h1>
                  Oops!</h1>
                <h2>
                  404 Not Found</h2>
                <div className="error-details">
                  Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                  <a href="#" className="btn btn-primary btn-lg"><span
                    className="glyphicon glyphicon-home"></span>
                    Take Me Home </a><a href="#" className="btn btn-default btn-lg"><span
                  className="glyphicon glyphicon-envelope"></span> Contact Support </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h1>
    );
  }
}
