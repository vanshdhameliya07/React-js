import { combineReducers } from "redux";
import Counter from "./counterReducer";

let rootReducers = combineReducers({
    count: Counter
})

export default rootReducers