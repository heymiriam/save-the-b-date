import React, { useState, Component } from "react";
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import firebase from '../firebase/firebase.util';

import { auth, signInWithGoogle, createUserProfileDocument ,} from "../firebase/firebase.util";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {FormControl} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar:{
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const classes = useStyles();
    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
      event.preventDefault();
      try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        createUserProfileDocument(user, {displayName});
      }
      catch(error){
        setError('Error Sign Up. Please, try again');
      }
        
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setDisplayName("");
    };
  
    const onChangeHandler = event => {
      const { name, value } = event.currentTarget;
  
      if (name === "userEmail") {
        setEmail(value);
      } else if (name === "userPassword") {
        setPassword(value);
      } else if (name === "displayName") {
        setDisplayName(value);
      }else if (name === "confirmPassword") {
        setConfirmPassword(value);
      }
    };
    const handleSubmit=(event)=>{
      event.preventDefault();
      console.log(this.state);
    }
  return (
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
         
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        <FormControl className={classes.form} >
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullwidth
              id="displayName"
              label="First Name"
              name="displayName"
              value = {displayName}
              //autoComplete="email"
              className="my-1 p-1 w-full"
              placeholder="First Name"
              autoFocus
              onChange={event => onChangeHandler(event)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullwidth
              id="displayName"
              label="Last Name"
              name="displayLastName"
              
              //autoComplete="email"
              className="my-1 p-1 w-full"
              placeholder="Last Name"
              autoFocus
              onChange={event => onChangeHandler(event)}
            />
          </Grid>
          <Grid item xs={12} sm={20}>
          <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullwidth
              id="email"
              label="Email Address"
              name="userEmail"
              value = {email}
              autoComplete="email"
              className="my-1 p-1 w-full"
              placeholder="mail@mail.com"
              autoFocus
              onChange = {(event) => onChangeHandler(event)}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
          <TextField
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullwidth
              id="userPassword"
              label="Password"
              name="userPassword"
              value = {password}
              autoComplete="email"
              className="mt-1 mb-3 p-1 w-full"
              placeholder="Your Password"
              autoFocus
              onChange = {(event) => onChangeHandler(event)}
              />
              </Grid>
              <Grid item xs={12} sm={12}>
              <TextField
              type="password"
              variant="outlined"
              required
              fullwidth
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              value = {confirmPassword}
              autoComplete="confirm-password"
              placeholder="Confirm Password"
              onChange = {(event) => onChangeHandler(event)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {(event) => handleSubmit(event)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </FormControl>
      </div>
      <Box mt={5}>
       
      </Box>
    </Container>
    </div>
  );
  };


export default SignUp;