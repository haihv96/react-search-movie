
import { fromJS } from 'immutable';
import formReducer from '../../MovieList/reducer';

describe('formReducer', () => {
  it('returns the initial state', () => {
    expect(formReducer(undefined, {})).toEqual(fromJS({}));
  });
});
