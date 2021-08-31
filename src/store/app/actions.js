import {SET_TEXT} from './constants';

export const setText = payload => {
  return {
    type: SET_TEXT,
    payload: payload,
  };
};
