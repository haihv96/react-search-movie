import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {Option} from './styles';

const ToggleOption = ({value, message, intl}) => (
  <Option value={value}>
    {message ? intl.formatMessage(message) : value}
  </Option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ToggleOption);
