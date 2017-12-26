import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';
import {LOCATION_CHANGE} from 'react-router-redux';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import globalReducer from 'containers/App/reducer';
import {reducer as formReducer} from 'redux-form/immutable';

const routeInitialState = fromJS({
  location: null,
});


function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    global: globalReducer,
    form: formReducer,
    ...injectedReducers,
  });
}
