import React, {Component, useState} from 'react';
import Search from '../components/search.component';
import Datepick from '../components/datepicker.component';
import BDateCard from "../components/bdate-card.component";
import BDateList from "../components/bdate-list.component";
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBtn from "../components/add-btn.component";

const Home=() =>{
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
            <Search/>
            <br></br>
            
            <AddBtn />
            <Datepick/>
            <BDateCard />
        
            <br></br>
            <br></br>
            <br></br>
            <div>
            <Typography component="h2" variant="h3" color="primary" align="center">All your birthdays</Typography>
             <BDateList></BDateList>
            </div>
        </div>
    )
}

export default Home;