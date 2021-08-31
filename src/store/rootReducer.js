import {combineReducers} from 'redux';

import appReducer from './app/reducers';

const rootReducer = (state, action, history) => {
  const allReducers = combineReducers({
    app: appReducer,
  });

  return allReducers(state, action);
};

export default rootReducer;
