import {SET_TEXT} from './constants';
const initialState = {
  text: 'Intial Text',
};

const appReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
