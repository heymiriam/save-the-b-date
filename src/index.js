import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'typeface-roboto';
//import store from '../store';
import Firebase, { FirebaseContext } from './firebase/firebase.util';;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


