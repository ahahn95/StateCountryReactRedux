import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES, SET_SELECTED_COUNTRY } from "../actions/actions";

export const countryReducer = (state = {
    isFetching: false,
    countryList: [],
    selectedCountry: ''
}, action) => {
    switch(action.type) {
        case REQUEST_COUNTRIES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_COUNTRIES:
            return Object.assign({}, state, {
                isFetching: false,
                countryList: action.countries
            })
        case SET_SELECTED_COUNTRY:
            return Object.assign({}, state, {
                selectedCountry: action.countryCode
            })

        default:
            return state;
    }
}