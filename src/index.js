import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {render} from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'typeface-roboto';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import firebase from './firebase/firebase.util';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer} from 'redux-firestore'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/app'

//firebase.initializeApp({}, 'your app name here')

const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({
  getFirebase,
  getFirestore,
  })),
  reduxFirestore(firebase),
  //reactReduxFirebase(firebase)
  )
  );

  const rrfProps={
    firebase,
    config:firebase,
    dispatch:store.dispatch,
    createFirestoreInstance
    
  };

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


