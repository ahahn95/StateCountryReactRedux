import "isomorphic-fetch";

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
function requestCountries(countries) {
    return {
        type: REQUEST_COUNTRIES,
        countries
    }
}

export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
function receiveCountries(countries,json) {
    return {
        type: RECEIVE_COUNTRIES,
        countries,
        payload: json.data.children.map(child => child.data)
    }
}


export const ADD_COUNTRIES = 'ADD_COUNTRIES';
export function addCountries(countries) {
    return {
        type: ADD_COUNTRIES,
        countries
    };
}


