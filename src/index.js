import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import { createLogger } from 'redux-logger'
import  rootReducer from './reducers/combineReducers';

const loggerMiddleware = createLogger();

export let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,loggerMiddleware
    ));

ReactDOM.render(
     <Provider store={ store }>
         <App />
     </Provider>,
     document.getElementById('root'),
 );
