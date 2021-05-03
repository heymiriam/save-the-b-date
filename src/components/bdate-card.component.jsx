import React, { Component, useState} from 'react';
import firebase from '../firebase/firebase.util';
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
import { withStyles } from "@material-ui/core/styles";



const styles = theme =>({
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
        justifyContent: 'center',
        alignItems: 'center',

        
    },
    tag:{
        display:'flex',
        flexDirection:'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width:'98%',
        paddingTop:'10px',
    },
  });

class BDateCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bdate:{},
            key:''
        };
    }
    
    componentDidMount() {
        if(this.props.match && this.props.match.params.id){
        const ref = firebase.firestore().collection('bdate').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              bdate: doc.data(),
              key: doc.id,
              isLoading: false
            });
          } else {
            console.log("No such document!");
          }
        });
    }
      }
    
      delete(id){
        firebase.firestore().collection('bdate').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
          this.props.history.push("/")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }


   /* const[bdateCard, setBdatCard] = useState(BDATE_DATA)
    const removeCard = (id) => {
        let newBdateCard = bdateCard.filter((people)=> people.id !== id) 
        setBdatCard(newBdateCard)
    }
    const editCard=(id)=>{
       const db=firebase.firestore(); 
    
    }*/
    render(){
    const {classes} = this.props;
   return(
   <div className={classes.bdatecard}> 

       <Grid container className={classes.container}>

   
<Grid item md={4} className={classes.cardgrid}>
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={this.state.bdate.img}
          title={this.state.bdate.name}
         > 
         <div className={classes.tag}>
           <Chip color="primary" label={this.state.bdate.tag} >{this.state.bdate.tag}</Chip>
           </div>
        </CardMedia>
        <CardContent>

         <div>
                          
         </div>
          <b><Typography gutterBottom variant="h5" align="center" component="h3">
            {this.state.bdate.name}
          </Typography></b>
          <Typography variant="body1" color="textPrimary" align="center" component="p">
            {this.state.bdate.birthday}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        
        <Button variant="contained"  style={{width:"50%", backgroundColor:"#0099f2"}}  to="/edit-bday">
            <Link to="/edit-bday" ><EditIcon style={{color:"white"}}></EditIcon></Link>
        </Button>
        <Button variant="contained" color="secondary" style={{width:"50%"}} onClick={this.delete.bind(this, this.state.key)} >
            <Link ><DeleteIcon style={{color:"white"}}></DeleteIcon></Link>
        </Button>
      </CardActions>
    </Card>
    </Grid>
  
    
                <br></br>
                
     
  
    </Grid>
    </div>
   );
}
}
export default withStyles(styles,{withTheme:true})(BDateCard);