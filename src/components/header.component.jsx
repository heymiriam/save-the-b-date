import React from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase/firebase.util';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../assets/logo-01.svg";
//import IconButton from '@material-ui/core/IconButton';
import {auth} from "../firebase/firebase.util";
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menubg:{
      backgroundColor:'white',
      position: 'sticky',
    },
    signinbtn:{
      backgroundColor:'#2196f3',
      color:'white',
      underline:'none',
      "&:hover":{
        color: "white",
        backgroundColor:"#2172f3",
      },
      "&:active":{
        color: "white",
        textDecoration:'none',
      },
      "&:focus":{
        color: "white",
        textDecoration:'none',
      },
    },
  }));

  export default function Header({currentUser}) {
    const classes = useStyles();
    const handleLogout=() => {
      firebase.auth().signOut();
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
        
          <Toolbar className={classes.menubg}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Link className="logo" to="/" style={{ textDecoration: 'none' }} underline="none">
                <img src={logo} style={{width:'200px'}}></img>
            </Link>
          {
            currentUser ? (
              <Button variant="contained"  className={classes.signinbtn} onClick={()=>auth.signOut()}>
             {''}
                Sign Out
               {''}             
              </Button>
            ) :(
            <Button variant="contained"  className={classes.signinbtn}>
            <Link className="signIn" to="/signin" >
                Sign In
            </Link>                
            </Button>
            )
          }
            
            </Grid>
          </Toolbar>
        
        </AppBar>

      </div>
    );
  };



/*const Header = () =>(
    <div className="header">
        <Link className="logo" to="/">
            Logo
        </Link>
        <div className="nav-left-side">
            <Link className="sign-in" to="/signin">
                Sign In
            </Link>
         </div>
    </div>
    
)



<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            */

//export default Header