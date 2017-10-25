import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES } from "../actions/actions";

export const countryReducer = (state = {
    isFetching: false,
    countryList: []
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
        default:
            return state;
    }
}