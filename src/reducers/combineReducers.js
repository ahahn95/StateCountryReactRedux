import { combineReducers } from 'redux';
import { countryReducer } from "./countryReducer";
import { stateReducer } from "./stateReducer";


const rootReducer = combineReducers({
    countryReducer, stateReducer
})

export default rootReducer;
