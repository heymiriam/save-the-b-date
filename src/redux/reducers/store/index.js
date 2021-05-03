import { createStore } from 'redux';
import rootReducer from './rooteReducer';
 
const store = createStore(rootReducer);
 
export default store;