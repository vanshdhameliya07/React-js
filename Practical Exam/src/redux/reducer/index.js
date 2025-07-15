import { combineReducers } from "redux";
import crudreducer from "./crudreducer";

let rootReducer = combineReducers({
    crud: crudreducer
})

export default rootReducer