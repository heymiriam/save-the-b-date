import React, {Component, useState} from 'react';
import Search from '../components/search.component';
import Datepick from '../components/datepicker.component';
import BDateCard from "../components/bdate-card.component";
import BDateList from "../components/bdate-list.component";
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBtn from "../components/add-btn.component";
import firebase from '../firebase/firebase.util';
//import './home.style.css';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {removeBdate} from '../redux/actions/bdateActions'
 


//const Home=() =>{
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
    class Home extends Component {
    constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('bdate');
    this.unsubscribe = null;
    this.state = {
      bdate: [], 
      key:'',
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const bdate = [];
    querySnapshot.forEach((doc) => {
      const { name, birthday, tag, img } = doc.data();
      bdate.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        birthday,
        tag,
        img,
      });
    });
    this.setState({
      bdate
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

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
  delete(id){
    firebase.firestore().collection('bdate').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
handleRemove() {
    return firebase.database().ref('items').child('ITEM_KEY').remove();
}

    render(){
        
       // console.log(this.props);
    const{bdate}=this.props;
    const {classes} = this.props;
    return(
        
        <div >
           <Search/>
            <br></br>
            
            <AddBtn />
            
            <br></br>
            <br></br>
            <br></br>
            <div>
            <Typography component="h2" variant="h3" color="primary" align="center">All your birthdays</Typography>
            <div className={classes.bdatecard}>
            <Grid container className={classes.container}>
            {bdate && this.state.bdate.map(bdate=>
            
            <>
            <Grid item md={4} className={classes.cardgrid}>


            <Card className={classes.card} bdate={bdate} key={bdate.id}>
            <CardActionArea>
              <CardMedia color='primary'
                className={classes.media}
                image={bdate.img}
                title={bdate.name}
                src={bdate.img}
               > 
               <div className={classes.tag}>
                 <Chip color="primary" label={bdate.tag}>{bdate.tag}</Chip>
                 </div>
              </CardMedia>
              <CardContent>
      
               <div>
                                
               </div>
                <b><Typography gutterBottom variant="h5" align="center" component="h3">
                  {bdate.name}
                </Typography></b>
                <Typography variant="body1" color="textPrimary" align="center" component="p">
                  🎂 {bdate.birthday}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.buttons}>
              
              <Button variant="contained" style={{width:"50%", backgroundColor:"#0099f2"}} > 
                  <Link to={`/edit-bday/${bdate.key}`} key={bdate.id}><EditIcon style={{color:"white"}}></EditIcon></Link>
              </Button>
              <Button variant="contained" color="secondary" style={{width:"50%"}} onClick={this.delete.bind(this, this.state.key)}  key={bdate.id}>
                  <Link key={bdate.id}><DeleteIcon style={{color:"white"}}></DeleteIcon></Link>
              </Button>
            </CardActions>
          </Card>
          </Grid>
          </>
            
                )}
         </Grid> 
         </div>
             <BDateList></BDateList>
            </div>
        </div>
  );
}
}
//onClick={this.delete.bind(this, this.state.key)} 
const mapStateToProps=(state, ownProps)=>{
    console.log(state);
    const id=ownProps.match.params.id;
    const bdate=state.firestore.data.bdate;
    //const bdates=bdate ? bdate[id]:null
    return{
        bdate:state.firestore.ordered.bdate
        //bdate:bdates
    }
}
//export default Home;
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'bdate'
        }
    ])
)(withStyles(styles,{withTheme:true})(Home));
