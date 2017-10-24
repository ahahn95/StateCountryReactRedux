import { ADD_COUNTRIES } from "../actions/actions";

const initialState = {
    countryList: []
}

export const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COUNTRIES:
            return Object.assign({}, state, {
                 countryList: action.countries
            })
        default:
            return state;
    }
}


