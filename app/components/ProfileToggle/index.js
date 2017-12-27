import React from 'react';
import {logout} from '../../containers/App/actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {FormattedMessage} from 'react-intl';
import {selectCurrentUser} from '../../containers/App/selectors';
import {
  NameSpan,
  Flex,
  Avatar,
  Caret,
  DropDown,
  CustomLink,
  Ul,
  Li
} from './styles';
import messages from './messages';
import {Link} from 'react-router-dom';

class ProfileToggle extends React.Component {
  handleClickLogout(e) {
    e.preventDefault();
    FB.logout((response) => {
      response.status == 'unknown' ? this.props.dispatchLogout() : null;
    });
  }

  render() {
    return (
      <li className="dropdown">
        <DropDown className="dropdown-toggle" data-toggle="dropdown" href="#">
          <Flex>
            <Avatar src={this.props.currentUser.picture.data.url}/>
            <NameSpan>{this.props.currentUser.name}</NameSpan>
            <Caret className="caret">
            </Caret>
          </Flex>
        </DropDown>
        <Ul className="dropdown-menu">
          <Li>
            <CustomLink to="/profile">
              <FormattedMessage {...messages.profile}/>
            </CustomLink>
          </Li>
          <Li>
            <CustomLink to="#" onClick={(e) => {
              this.handleClickLogout(e)
            }}>
              <FormattedMessage {...messages.logout}/>
            </CustomLink>
          </Li>
        </Ul>
      </li>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser()
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogout: () => {
      dispatch(logout());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileToggle);
