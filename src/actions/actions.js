import "isomorphic-fetch";

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
export const REQUEST_STATES = 'REQUEST_STATES';
export const RECIEVE_STATES = 'RECIEVE_STATES';

function requestCountries() {
    return {
        type: REQUEST_COUNTRIES
    }
}

function receiveCountries(countries) {
    return {
        type: RECEIVE_COUNTRIES,
        countries
    }
}

function requestStates() {
    return {
        type: REQUEST_STATES
    }
}

function receiveStates(states) {
    return {
        type: RECIEVE_STATES,
        states
    }
}



export function fetchCountries() {
    return function (dispatch) {
        dispatch(requestCountries())
        return fetch('http://xc-ajax-demo.herokuapp.com/api/countries/')
            .then(response => response.json())
            .then(response => dispatch(receiveCountries(response)))

    }
}

export function fetchStates() {
    return function (dispatch) {
        dispatch(requestStates())
        return fetch('http://xc-ajax-demo.herokuapp.com/api/states/')
            .then(response => response.json())
            .then(response => dispatch(receiveStates(response)))

    }
}

//
//
// export const ADD_COUNTRIES = 'ADD_COUNTRIES';
// export function addCountries(countries) {
//     return {
//         type: ADD_COUNTRIES,
//         countries
//     };
// }

