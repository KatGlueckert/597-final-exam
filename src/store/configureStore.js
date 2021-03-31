import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import projectsReducer from '../reducers/projects';
import teammatesReducer from '../reducers/teammates';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      projects: projectsReducer,
      teammates: teammatesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
