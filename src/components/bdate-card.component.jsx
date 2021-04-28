import React, { Component, useState} from 'react';
import BDATE_DATA from "../pages/bdate/bdate.data";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function BDateCard(){
    const[bdateCard, setBdatCard] = useState(BDATE_DATA)
    const removeCard = (id) => {
        let newBdateCard = bdateCard.filter((people)=> people.id !== id) 
        setBdatCard(newBdateCard)
    }
   return(
   <> 
   
    <b><Typography component="h1" variant="h3" align="center" color="primary">You have {bdateCard.length} birthdays coming soon</Typography></b>
   { bdateCard.map((people)=>{
            const{id, name, birthday, tag, img}= people
            return(
            <div style={{display:"flex", flexDirection:"column"}}>
            <Box style={{width:"20%"}} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <div className="container" key={id}>
            <Box style={{width:"20%"}} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                     <div>
                        <Chip color="primary" label={tag}>{tag}</Chip>
                    </div>
                    <div>
                        <Avatar alt={name} style={{with:"30%"}} src={img}/>
                        
                    </div>
                    
                    
                </Box>

                <div>
                    <h3>{name}</h3>
                    <p>{birthday}</p>
                </div>
                <Button variant="contained" color="secondary" onClick={() => removeCard(id)}>
                    <Link ><DeleteIcon style={{color:"white"}}></DeleteIcon></Link>
                </Button>
                
            </div>
            </Box>
            <br></br>
            </div>
            )
    })}
    </>
   )
    }
 
export default BDateCard;