import React, { Component, useState} from 'react';
import BDATE_DATA from "../pages/bdate/bdate.data";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import EditIcon from '@material-ui/icons/Edit';


function BDateList(){
    const useStyles = makeStyles({
        bdatecard:{
            width:"100%",
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        container:{
            width:"70%",
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            overflow: 'hidden',
        },
        buttons: {
            display:"flex",
            flexDirection: 'row',
            justifyContent: 'space-between',

          },
          tag:{
            display:'flex',
            flexDirection:'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width:'98%',
            paddingTop:'10px',
        },
          
        media: {
          height: 140,
        },
        
        cardgrid:{
           
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',

            

        },
        card:{
            width:'90%',
            display: 'flex',
            flexDirection: 'column',
            marginTop:'30px',
            
        },
      });
    const classes = useStyles();
 
    const[bdateCard, setBdatCard] = useState(BDATE_DATA)
    const removeCard = (id) => {
        let newBdateCard = bdateCard.filter((people)=> people.id !== id) 
        setBdatCard(newBdateCard)
    }
    const editCard=(id)=>{
        
    }
   return(
   <div className={classes.bdatecard}> 
       <Grid container className={classes.container}>

{ bdateCard.map((people)=>{
         const{id, name, birthday, tag, img}= people
         return(
         <>
<Grid item md={4} className={classes.cardgrid}>
<Card className={classes.card}>
   <CardActionArea>
     <CardMedia
       className={classes.media}
       image={img}
       title={name}
      > 
      <div className={classes.tag}>
        <Chip color="primary" label={tag} >{tag}</Chip>
        </div>
     </CardMedia>
     <CardContent>

      <div>
                       
      </div>
       <b><Typography gutterBottom variant="h5" align="center" component="h3">
         {name}
       </Typography></b>
       <Typography variant="body1" color="textPrimary" align="center" component="p">
         {birthday}
       </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions className={classes.buttons}>
     
     <Button variant="contained" color="primary" style={{width:"50%"}} onClick={() => editCard(id)}>
         <Link ><EditIcon style={{color:"white"}}></EditIcon></Link>
     </Button>
     <Button variant="contained" color="secondary" style={{width:"50%"}} onClick={() => removeCard(id)}>
         <Link ><DeleteIcon style={{color:"white"}}></DeleteIcon></Link>
     </Button>
   </CardActions>
 </Card>
 </Grid>

 
             <br></br>
             
  </>
  
 )
 })}
 </Grid>
    </div>
   )
    }
 
export default BDateList;