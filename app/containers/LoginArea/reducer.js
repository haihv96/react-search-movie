import {fromJS} from 'immutable';
import {HIDE_MODAL, SHOW_MODAL} from './constants';

const initialState = fromJS({
  modal: {
    is_show: false
  }
});

const loginAreaReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_MODAL:
      return state.setIn(['modal', 'is_show'], false);
    case SHOW_MODAL:
      return state.setIn(['modal', 'is_show'], true);
    default:
      return state;
  }
};

export default loginAreaReducer;
