
import { REQUEST_STATES, RECIEVE_STATES} from "../actions/actions";

export const stateReducer = (state = {
    isFetching: false,
    stateList: [],
}, action) => {
    switch(action.type) {
        case REQUEST_STATES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECIEVE_STATES:
            return Object.assign({}, state, {
                isFetching: false,
                stateList: action.states
            })
        default:
            return state;
    }
}