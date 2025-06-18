import { combineReducers } from "redux";
import postreducer from "./postreducer";

let rootreducer = (combineReducers({
    posts: postreducer
}))

export default rootreducer