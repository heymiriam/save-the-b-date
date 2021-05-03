import React, {Component, useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import firebase from '../firebase/firebase.util';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import { FormControl, Button } from '@material-ui/core';
import {auth, signInWithGoogle} from '../firebase/firebase.util';
import { useTheme } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import logo from "../assets/logo-01.svg";
import {signIn} from '../redux/actions/authAction';




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

    /*class SignIn extends Component {
      constructor(props) {
        super(props)
    
        this.state = {
          email: '',
          password: '',
        }
      }

        //const [email, setEmail] = useState('');
       /* const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        const [emailError, setEmailError]=useState('');
        const [passwordError, setPasswordError]=useState('');
        const history = useHistory();*/
        
        
    //const defaultTheme = createMuiTheme();
    
 
   /* handleSubmit = async (event) => {
    event.preventDefault()*/
  
      // this.setState({
      //     email: '',
      //     password: ''
      // })
  
      /*try {
        await auth.signInWithEmailAndPassword(
          this.state.email,
          this.state.password
        )
      } catch (error) {
        console.log(error)
      }
    }*/
  
  /*clearInput=() => {
    setEmail('');
    setPassword('');
  }
  
  clearError=()=>{
    setEmailError('');
    setPasswordError('');
  }*/
  
  /*handleLogin=(event, email, password) => {
      event.preventDefault();
      clearError();
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password).catch(err => {
        switch(err.code){
          case "auth/noemail":
          case "auth/usernotfound":
            setEmailError(err.message);
            break;
          case "auth/wrongpassword":
            setPasswordError(err.message);
            break;
        }
      })
    }*/
    
  

     //onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}*
   
     /* handleLogout=() => {
        firebase.auth().signOut();
      };*/

   
     /* authListener=() => {
        firebase.auth().onAuthStateChanged(email=>{
          if(email){
            clearInput();
            setEmail(email);
          }else{
            setEmail('');
          }
        })
      };
      useEffect(()=>{
        authListener();
      },[]);*/
      /*const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
    //  onChange = {(event) => onChangeHandler(event)}
      

    handleChange = (event) => {
      const { value, name, email } = event.target
  
      this.setState({
        [name]: value,
        [email]:value,
      })
    }






    
     render(){*/



      const SignIn = () => {
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
      const classes = useStyles();
    
    return (
      <div>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <img src={logo} style={{width:'400px'}}></img>
        <br/>
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
                style={{backgroundColor:"#0099f2"}}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
              >
                Sign In
                </Button>
            
             <Button variant="contained" size="medium"  style={{width:'100%'}} color="secondary" className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
            style={{backgroundColor:"#dee1e3"}}
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
            <br/>
            <Grid container>
                <Grid item xs>
                <Link to="passwordReset" variant="body2">
                    Reset Password
                </Link>
                </Grid>
                <Grid item>
                If you have an account, {" "}
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
    

export default connect()(SignIn);
//export default withStyles(styles,{withTheme:true})(SignIn);
/*paper: {
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
  },*/