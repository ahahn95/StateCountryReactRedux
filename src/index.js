import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
//import { addCountries } from './actions/actions';
import {fetchCountries} from './actions/actions';
import { createLogger } from 'redux-logger'
import  rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,loggerMiddleware
    ));

// const USA = {
//     code: 'US',
//     name: 'United States',
// };
//
// const RU = {
//     code: 'RU',
//     name: 'Russia'
// };
//
// const BR = {
//     code: 'BR',
//     name: 'Brazil'
// };
//
// const arr = [USA,RU,BR];
//
// store.dispatch(addCountries(arr));

store.dispatch(fetchCountries())

ReactDOM.render(
     <Provider store={ store }>
         <App />
     </Provider>,
     document.getElementById('root'),
 );
