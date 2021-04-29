import React, {Component, useState} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from '../components/search.component';
import Datepick from '../components/datepicker.component';
import BDateCard from "../components/bdate-card.component";
import BDateList from "../components/bdate-list.component";
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';





const AddBtn=() =>{
   
    const useStyles = makeStyles((theme) => ({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
          },
      }));
      const classes = useStyles();
    return(
        
        <div >
            
            <Fab color="primary" aria-label="add" className={classes.fab} to="/add-bday">
            <Link to="/add-bday">
             <AddIcon />
             </Link>
             </Fab>
             
             
        </div>
    )
}


export default AddBtn;