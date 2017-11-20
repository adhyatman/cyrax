import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers(
  {
    user: userReducer,
    tweets: tweetsReducer
  }
);

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"});
  axios.get("http://rest.learncode.academy/api/wstern/users")
    .then((response) => {
      dispatch({type: "RECEIVE_USERS", payload: response.data})
    })
    . catch ((err) => {
      dispatch({type: "FETCH_USERS_ERROR", payload: err})
    });
});

/*
store.dispatch({type: "CHANGE_NAME", payload: "Will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
*/
