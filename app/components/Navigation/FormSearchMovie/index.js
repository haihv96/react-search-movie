import React from 'react';

import {FormattedMessage} from 'react-intl';
import messages from './messages';

function FormSearchMovie() {
  return (
    <div>
      <form className="navbar-form navbar-left" action="/">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" name="search"/>
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

FormSearchMovie.propTypes = {};

export default FormSearchMovie;
