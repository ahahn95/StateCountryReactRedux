//import { ADD_COUNTRIES } from "../actions/actions";
import { REQUEST_COUNTRIES, RECEIVE_COUNTRIES} from "../actions/actions";
// export const countryReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_COUNTRIES:
//             return Object.assign({}, state, {
//                  countryList: action.countries
//             })
//         default:
//             return state;
//     }
// }


export const reducer = (state = {
    isFetching: false,
    countryList: [],
    stateList: [],
}, action) => {
    switch(action.type) {
        case REQUEST_COUNTRIES:
            return Object.assign({}, state, {
                isFetching: true,
                countryList: action.json
            })
        case RECEIVE_COUNTRIES:
            Object.assign({}, state, {
                isFetching: false,
            })
        default:
            return state;
    }
}