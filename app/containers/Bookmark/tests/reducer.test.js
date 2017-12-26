
import { fromJS } from 'immutable';
import bookmarkReducer from '../reducer';

describe('bookmarkReducer', () => {
  it('returns the initial state', () => {
    expect(bookmarkReducer(undefined, {})).toEqual(fromJS({}));
  });
});
