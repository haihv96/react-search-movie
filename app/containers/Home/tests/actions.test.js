
import {
  defaultAction,
} from '../../MovieList/actions';
import {
  DEFAULT_ACTION,
} from '../../MovieList/constants';

describe('Home actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
