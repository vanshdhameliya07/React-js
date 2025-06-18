import { combineReducers } from "redux";
import reducer from "./Crudreducer";

let rootReducer = combineReducers({
    crud: reducer
})
export default rootReducer