import "isomorphic-fetch";

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
export const REQUEST_STATES = 'REQUEST_STATES';
export const RECEIVE_STATES = 'RECEIVE_STATES';
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY';

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
        type: RECEIVE_STATES,
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

export function fetchStates(stateCode) {
    return function (dispatch) {
        dispatch(requestStates())
        return fetch('http://xc-ajax-demo.herokuapp.com/api/states/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'country=' + stateCode
        })
            .then(response => response.json())
            .then(response => dispatch(receiveStates(response)))
    }
}

export function setCountrySelectedItem(country) {
    return {
        type: SET_SELECTED_COUNTRY,
        country
    }
}