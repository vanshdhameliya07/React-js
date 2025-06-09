import { combineReducers } from "redux";
import Counter from "./counterReducer";
import crudReducer from "./crudReducer";

let rootReducer = combineReducers({
    count: Counter,
    crud: crudReducer
})

export default rootReducer