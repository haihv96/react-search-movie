import {HIDE_MODAL, SHOW_MODAL} from './constants';

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
};

export const showModal = () => {
  return {
    type: SHOW_MODAL
  };
};
