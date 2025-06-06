import { createStore } from "redux";
import rootReducers from "./reducers/indexReducer";

let store = createStore(rootReducers)

export default store