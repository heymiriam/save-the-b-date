import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/sign-in.component';
import Home from './pages/home.component';
import Header from './components/header.component';
import Search from './components/search.component';
import SignUp from './pages/sign-up.component';
import AddBDay from './pages/add-bday.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.util';



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(()=>{
    let unsubscribeFromAuth=null
    unsubscribeFromAuth=auth.onAuthStateChanged(async(userAuth)=>{
      const userRef= await createUserProfileDocument(userAuth)
      if(userAuth){
        userRef.onSnapshot((snapShot)=>{
          console.log(snapShot.data());
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
      }else{
      setCurrentUser(userAuth)
      }
    })
     
    return()=>{
      unsubscribeFromAuth()
    }
  },[])
  return (
    <div className="app">
      <Header component={Header} currentUser={currentUser} />
      <Switch>
      <Route exact path="/" component={Home}/> 
      <Route path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignIn/>
          }/>
      <Route path="/signup" render={() =>
            currentUser ? <Redirect to='/' /> : <SignUp/>
          }/>
      <Route path="/add-bday" component={AddBDay} />
      </Switch>
    </div>
  );
}

export default App;
