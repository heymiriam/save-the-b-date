import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/sign-in.component';
import Home from './pages/home.component';
import Header from './components/header.component';
import Search from './components/search.component';
import SignUp from './pages/sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { addCollectionAndDocuments } from './firebase/firebase.util';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  console.log('test');
  return (
    <div className="app">
      <Header component={Header} currentUser={currentUser} />
      <Switch>
      <Route exact path="/" component={Home}/> 
      <Route path="/signin" component={SignIn} render={() => currentUser ? (<Redirect to="/" />) : (<SignIn/>)} />
      <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
