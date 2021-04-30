import React, {Component, useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import firebase from '../firebase/firebase.util';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import { FormControl, Button } from '@material-ui/core';
import {auth, signInWithGoogle} from '../firebase/firebase.util';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty,firestoreConnect } from 'react-redux-firebase'




    const useStyles = makeStyles((theme) => ({
      palette:{
        primary:{
          main: '#2196f3'
        }
      
      },
      paper: {
        textTransform: 'none',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

  



    const SignIn = () => {
        const propTypes = {
          uid: PropTypes.string,
          firestore: PropTypes.shape({
          add: PropTypes.func.isRequired
          }).isRequired
        }
//  state = { category: '' }


        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        
        const signInWithEmailAndPasswordHandler = (event,email, password) => {
          event.preventDefault();
          auth.signInWithEmailAndPassword(email, password).catch(error => {
          setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
          });
        };
          const onChangeHandler = (event) => {
              const {name, value} = event.currentTarget;
    
              if(name === 'userEmail') {
                  setEmail(value);
              }
              else if(name === 'userPassword'){
                setPassword(value);
              }
          };
      //const{classes}=this.props;
      const addCategory=()=> {
        this.props.firestore.add(
          { collection: 'bdate' },
          {
            uid: this.props.uid,
            name: this.state.bdate
          }
        )
        this.setState({ bdate: '' })
      }
      const classes = useStyles();
      if (!this.props.uid) return null
    return (
      <div>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <FormControl className={classes.form} >
            <TextField
             type="email"
             variant="outlined"
             margin="normal"
             required
             fullwidth
             id="userEmail"
             label="Email Address"
             name="userEmail"
             value = {email}
             autoComplete="email"
             className="my-1 p-1 w-full"
             placeholder="mail@mail.com"
                onChange = {(event) => onChangeHandler(event)}
                autoFocus
              />
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
                autoComplete="password"
                placeholder="Your Password"
                autoFocus
                onChange = {(event) => onChangeHandler(event)}
      
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
              >
                Sign In
                </Button>
            
             <Button variant="contained" size="medium"  style={{width:'100%'}} color="secondary" className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
            onClick={() => {
              try {
                signInWithGoogle();
              } catch (error) {
                console.error("Error signing in with Google", error);
              }
            }}
            >
              
              Sign in with Google
             
            </Button>
          
            <Grid container>
                <Grid item xs>
                <Link to="passwordReset" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                Have you got an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:text-blue-600" >
                  Sign Up 
                </Link>{" "}
                </Grid>
            </Grid>
            </FormControl>
        </div>
       
        </Container>
        </div>
    );
  };
    

  const mapStateToProps = state => {
    return {
      uid: state.firebase.auth.uid,
    }
  }
  
  const mapDispatchToProps = {}
  
  
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(),
  )(SignIn)

