import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import get_book_reducer from '../reducers/get_book_reducer';
import list_book_reducer from '../reducers/list_book_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      text : get_book_reducer,
      data : list_book_reducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
