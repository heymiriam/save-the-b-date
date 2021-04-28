import React, { Component, useState} from 'react';
import BDATE_DATA from "../pages/bdate/bdate.data";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import BDateCard from "./bdate-card.component";



//const BDaySoon=() =>{
/*function BDaySoon({name,birthday, tag, img})=>{{
    return(
        <div>
             <div>
                <Typography component="h1" variant="h3">You have {id} birthdays coming soon</Typography>
             </div>
             <BDateCard></BDateCard>
        </div>
    )
    
    }};*/

    const BDaySoon =({id, name, birthday, tag, img})=>{
        const[birthdaySoon, setBirthdaySoon] = useState(BDATE_DATA)
        return(
        <div>
             
             <BDateCard></BDateCard>
        </div>
        )
    }

export default BDaySoon;