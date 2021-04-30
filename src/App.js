import React, {useState, useEffect, Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import SignIn from './pages/sign-in.component';
import Home from './pages/home.component';
import Header from './components/header.component';
import Search from './components/search.component';
import SignUp from './pages/sign-up.component';
import AddBDay from './pages/add-bday.component';
import EditBDay from './components/edit-bday.component';
import firebase from './firebase/firebase.util';
import Footer from './components/footer.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.util';
import PropTypes from 'prop-types'
import { Provider } from "react-redux"
import store from "./redux/store"
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'


function App(props) {
  
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



  const [id,setId]=('');
  const [bdayPersonObject,setBdayPersonObject]=useState({});
  const addEdit= (obj)=>{
    if(id === '')
    firebase.child('user').push(
        obj,
        error=>{
            if(error)
                console.log(error)
            else
                setId('')
        })
    else
        firebase.child(`User/${id}`).set(
            obj,
            error=>{
                if(error)
                    console.log(error)
                else
                    setId('')
            }) 
  };


  //export const [id,setId]=('');
  //export const [bdayPersonObject,setBdayPersonObject]=useState({});
   
   /* const addEdit= (obj)=>{
        if(id === '')
        firebase.child('user').push(
            obj,
            error=>{
                if(error)
                    console.log(error)
                else
                    setId('')
            })
        else
            firebase.child(`User/${id}`).set(
                obj,
                error=>{
                    if(error)
                        console.log(error)
                    else
                        setId('')
                }) 
    }

    const onDelete = id =>{
        if(window.confirm('Do you want to delete this')){
            firebase.child(`User/${id}`).remove(
                error=>{
                    if(error)
                        console.log(error)
                    else
                        setId('')
                })
        }
    }*/

  return (
    <div className="app">
      <Header component={Header} currentUser={currentUser} />
      <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/home" component={Home}/> 
      <Route path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignIn/>
          }/>
      <Route path="/signup" render={() =>
            currentUser ? <Redirect to='/' /> : <SignUp/>
          }/>
      <Route path="/add-bday" component={AddBDay} />
      <Route path='/edit-bday/:id' component={EditBDay} />
      </Switch>
      <Footer component={Footer}/>
    </div>
  );
}

export default App;
