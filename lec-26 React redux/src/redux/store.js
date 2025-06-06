import { createStore } from "redux";
import rootReducer from "./reducers/indexReducer";

const store = createStore(rootReducer)

export default store;