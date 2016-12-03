import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import TodoList from './containers/TodoList'
import todoReducer from './reducers/todoReducer'

var reducers = combineReducers({
  todo: todoReducer
});

var store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <TodoList/>
  </Provider>,
  document.getElementById('app')
)
