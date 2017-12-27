import React from 'react'
import {FormattedMessage} from 'react-intl';
import {Field, reduxForm} from 'redux-form/immutable';
import {connect} from 'react-redux';
import {
  FormGroup,
  ControlLabel
} from 'react-bootstrap';

import messages from './messages';
import {Flex} from '../../containers/App/styles';
import {
  FilterButton,
  FormGroupCustom
} from './styles';

class FormFilterMovies extends React.Component {
  render() {
    const sortBy = {
      'popularity.desc': <FormattedMessage {...messages.sortByPopularityDesc}/>,
      'popularity.asc': <FormattedMessage {...messages.sortByPopularityAsc} />,
      'release_date.asc': <FormattedMessage {...messages.sortByReleaseDateAsc}/>,
      'release_date.desc': <FormattedMessage {...messages.sortByReleaseDateDesc}/>,
      'revenue.asc': <FormattedMessage {...messages.sortByRevenueAsc}/>,
      'revenue.desc': <FormattedMessage {...messages.sortByRevenueDesc}/>,
      'primary_release_date.asc': <FormattedMessage {...messages.sortByPrimaryReleaseDateAsc}/>,
      'primary_release_date.desc': <FormattedMessage {...messages.sortByPrimaryReleaseDateDesc}/>,
      'original_title.asc': <FormattedMessage {...messages.sortByOriginalTitleAsc}/>,
      'original_title.desc': <FormattedMessage {...messages.sortByOriginalTitleDesc}/>,
      'vote_average.asc': <FormattedMessage {...messages.sortByVoteAverageAsc}/>,
      'vote_average.desc': <FormattedMessage {...messages.sortByVoteAverageDesc}/>,
      'vote_count.asc': <FormattedMessage {...messages.sortByVoteCountAsc}/>,
      'vote_count.desc': <FormattedMessage {...messages.sortByVoteCountDesc}/>,
    };

    const releaseDates = {
      '2017': '2017',
      '2016': '2016',
      '2015': '2015',
      '2014': '2014',
      '2013': '2013',
      '2012': '2012',
      '2011': '2011',
      '2010': '2010',
    };
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Flex>
          <FormGroupCustom>
            <ControlLabel><FormattedMessage {...messages.sortBy}/></ControlLabel>
            <Field name="sort_by" component="select" className="form-control">
              {
                Object.keys(sortBy).map((key, index) => (
                  <option
                    value={key}
                    key={index}
                  >
                    {sortBy[key]}
                  </option>
                ))
              }
            </Field>
          </FormGroupCustom>
          <FormGroupCustom>
            <ControlLabel><FormattedMessage {...messages.releaseYear}/></ControlLabel>
            <Field name="primary_release_year" component="select" className="form-control">
              <option>
                <FormattedMessage {...messages.releaseYearAll}/>
              </option>
              {
                Object.keys(releaseDates).map((key, index) => (
                  <option value={key} key={index}>{releaseDates[key]}</option>
                ))
              }
            </Field>
          </FormGroupCustom>
          <FormGroup>
            <FilterButton type="submit" bsStyle="primary">
              <FormattedMessage {...messages.filterMovies}/>
            </FilterButton>
          </FormGroup>
        </Flex>
      </form>
    )
  }
}

const Connect = connect(null, null)(FormFilterMovies);

export default reduxForm({
  form: 'filterMovies',
})(Connect);

