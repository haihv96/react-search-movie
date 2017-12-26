import React from 'react';

import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {Link} from 'react-router-dom';

const MyFavorite = (props) => (
    <li className={props.location.pathname === '/bookmarks' ? 'active' : null}>
      <Link to="/bookmarks">
        <FormattedMessage {...messages.MyBookmark}/>
      </Link>
    </li>
  )
;

export default MyFavorite;
