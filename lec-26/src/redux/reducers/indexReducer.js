import { combineReducers } from "redux";

import counter from "./counterReducer";

const rootReducer = combineReducers({
    count: counter,
})

export default rootReducer;