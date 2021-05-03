import authReducer from './authReducer'
import bdateReducer from './bdateReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth:authReducer,
    bdate:bdateReducer,
    firestore: firestoreReducer,
    firebaseAuth: firebaseReducer
});

export default rootReducer