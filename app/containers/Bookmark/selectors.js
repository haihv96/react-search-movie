import { createSelector } from 'reselect';

/**
 * Direct selector to the bookmark state domain
 */
const selectBookmarkDomain = (state) => state.get('bookmark');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Bookmark
 */

const makeSelectBookmark = () => createSelector(
  selectBookmarkDomain,
  (substate) => substate.toJS()
);

export default makeSelectBookmark;
export {
  selectBookmarkDomain,
};
