import {createSelector} from 'reselect';

export const selectLoginArea = state => state.get('loginArea');

export const selectModal = () => createSelector(
  selectLoginArea,
  (loginAreaState) => loginAreaState.get('modal')
);

export const selectModalIsShow = () => createSelector(
  selectLoginArea,
  (loginAreaState) => loginAreaState.getIn(['modal', 'is_show'])
);

