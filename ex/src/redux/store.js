import { applyMiddleware, createStore } from "redux";
import rootReducer from "./crudreducer";
import { thunk } from "redux-thunk";



let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
