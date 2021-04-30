import React, {Component, useState} from 'react';
import Search from '../components/search.component';
import Datepick from '../components/datepicker.component';
import BDateCard from "../components/bdate-card.component";
import BDateList from "../components/bdate-list.component";
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddBtn from "../components/add-btn.component";
import firebase from '../firebase/firebase.util';
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
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

//const Home=() =>{
    const styles = theme =>({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(3),
            right: theme.spacing(3),
          },
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
  static propTypes = {
    uid: PropTypes.string,
    bdate: PropTypes.arrayOf(PropTypes.string)
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
  renderBdate(bdate) {
    return <div key={bdate}>
      {bdate}
    </div>
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


  delete(id){
    firebase.firestore().collection('bdate').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

    render(){
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
            <Grid container spacing={2} className={classes.container}>
            {this.state.bdate.map(bdate=>
            
            <>
            
            <Grid item md={4} className={classes.cardgrid}>

            <Card className={classes.card}>
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
                  {bdate.birthday}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.buttons}>
              
              <Button variant="contained" color="primary" style={{width:"50%"}} to={`/edit/${this.state.key}`}>
                  <Link to={`/edit-bday/${bdate.key}`}><EditIcon style={{color:"white"}}></EditIcon></Link>
              </Button>
              <Button variant="contained" color="secondary" style={{width:"50%"}} onClick={this.delete.bind(this, this.state.key)} >
                  <Link ><DeleteIcon style={{color:"white"}}></DeleteIcon></Link>
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


const mapStateToProps = state => {
    return {
      uid: state.firebase.auth.uid,
      bdate: state.firestore.ordered.bdate ? state.firestore.ordered.bdate.map(c => c.name) : [],
    }
  }
  
  const mapDispatchToProps = {}
//export default Home;
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => {
      if (!props.uid) return []
      return [
        {
          collection: 'bdate',
          where: [
            ['uid', '==', props.uid]
          ]
        }
      ]
    }
    )
  )(withStyles(styles,{withTheme:true})(Home))
