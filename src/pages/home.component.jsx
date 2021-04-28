import React, {Component, useState} from 'react';
import Search from '../components/search.component';
import Datepick from '../components/datepicker.component';
import BirthdaySoon from "../components/birthdaysoon.component";
const Home=() =>{
    return(
        
        <div >
            <Search/>
            <br></br>
            <Datepick/>
            <BirthdaySoon />
        </div>
    )
}

export default Home;