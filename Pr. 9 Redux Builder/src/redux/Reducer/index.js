import { combineReducers } from "redux";
import CrudReducer from "./Crudreducer";

let rootReducer = combineReducers({
    crud: CrudReducer
})

export default rootReducer