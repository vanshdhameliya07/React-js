import { combineReducers } from 'redux';
import reducer from './rootreducer';
let rootreducer = combineReducers({
    crud: reducer
})
export default rootreducer 