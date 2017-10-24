import "isomorphic-fetch";

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
function requestCountries() {
    return {
        type: REQUEST_COUNTRIES
    }
}

export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
function receiveCountries(countries) {
    return {
        type: RECEIVE_COUNTRIES,
        countries
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

export function fetchCountries() {
    return function (dispatch) {
        dispatch(requestCountries())
        return fetch('http://xc-ajax-demo.herokuapp.com/api/countries/')
            .then(response => response.json())
            .then(response => dispatch(receiveCountries(response)))

    }
}


