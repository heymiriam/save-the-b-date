import React, {Component, useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import { FormControl, Button } from '@material-ui/core';
import {auth, signInWithGoogle} from '../firebase/firebase.util'
import { useTheme } from '@material-ui/core/styles';

/*function signIn()=> {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/


//export default function 
/*class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
        }
    };*/


/*class SignIn extends Component{
    constructor(props){
        super(props)

        this.state={
            email:"",
            password:"",
        };
    

    }*/

    
    const SignIn = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        const history = useHistory();
        const handleSubmit=async(event)=> {
        event.preventDefault()
       /* this.setState({
            email:"",
            password:"",
        })*/
        try{
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        }catch(error){
            console.log(error)
        }
    }
    //const defaultTheme = createMuiTheme();
    const style = makeStyles(theme=>({
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
  }))
  const classes = style()
  const theme = useTheme();

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
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={theme.paper}>
            <Avatar className={theme.avatar}>
            
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <FormControl className={theme.form} >
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange = {(event) => onChangeHandler(event)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
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
            <ThemeProvider theme={theme} >
             <Button variant="contained" size="medium"  style={{width:'100%'}} color="secondary" className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
            onClick={() => {
              try {
                signInWithGoogle();
              } catch (error) {
                console.error("Error signing in with Google", error);
              }
            }}
            >
              <Typography component="h1" variant="h5">
              Sign in with Google
              </Typography>
            </Button>
          </ThemeProvider>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:text-blue-600" onClick={()=> history.push("/signup")}>
                  Sign up here
                </Link>{" "}
                </Grid>
            </Grid>
            </FormControl>
        </div>
       
        </Container>
    );
    
};

export default SignIn;
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