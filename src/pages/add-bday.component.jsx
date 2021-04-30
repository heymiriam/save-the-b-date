import React, { Component, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import {Button, InputLabel} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { FormControl } from '@material-ui/core';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from '../firebase/firebase.util';
import { withStyles } from "@material-ui/core/styles";

//import NavBar from './Nav-Footer/NavBar'
//import Bottom from './Nav-Footer/Bottom'
//import useStyles from '../styles/styles'
//import { storage } from "../firebase/firabase.util"
//import { EventContext } from "../providers/EventProvider";


/*const AddBDay = (props)=>{

    const values={
        Name:'',

    }
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));

    const [tag, setTag] = useState("")
    const [img, setImg] = useState(null);
    const [validName, setValidName]= useState("");
    const [validDate, setValidDate]= useState("");
    const [validTag, setValidTag]= useState("");

    const handleDateChange = (date) => {
        setDate(date);
      };
    //const eventContext = useContext(EventContext)

    //const classes = useStyles();

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImg(e.target.files[0])
        }
    };

    console.log("image: ", img)

    const submitHandler = async (e) => {
        e.preventDefault()*/

        /*const uploadTask = storage.ref(`images/${img.name}`).put(img);
        await uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(progress)
        },
        error => {
            console.log(error);
        },
        () => {
            storage
            .ref("images")
            .child(img.name)
            .getDownloadURL()
            .then(url => {
                if(url) {

                    eventContext.addEventHandler({
                        title: title,
                        birthday: birthday,
                        date: date,
                        tag: tag,
                        img: url
                    })
                    
                }
            });
        }
        );*/
   // }
   const styles = theme =>({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
    });

    class AddBDay extends Component{
    constructor() {
    super();
    this.ref = firebase.firestore().collection('bdate');
    this.state = {
      name: '',
      birthday: '',
      tag: '',
      img:'',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { name, birthday, tag, img } = this.state;

    this.ref.add({
      name,
      birthday,
      tag,
      img,
    }).then((docRef) => {
      this.setState({
        name: '',
        birthday: '',
        tag: '',
        img:'',
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding birthday: ", error);
    });
  }
    render(){
    const { name, birthday, tag, img } = this.state;
    const {classes} = this.props;
    return(
    
        <div>
           
        <div >  
            <div style={{height:"400px",backgroundImage:`url('https://images.unsplash.com/photo-1529244927325-b3ef2247b9fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)`}}>
            
            </div>
            <h1 style={{textAlign:'center', }}>Add a Birthday</h1>
            <Grid container style={{ width: '90%'}}>
        <Grid item xs={12} sm={12} md={5} />
            <FormControl className='formWidth'>
                
            <TextField
                    style={{width:'100%'}}
                    type="text"
                    margin="normal"
                    fullwidth
                    id="name"
                    label="Name"
                    name="name"
                    value = {name}
                    className="my-1 p-1 w-full"
                    onChange={this.onChange}
                    required  
                    fullWidth 
            />
            
                <br />
            
                <br/>

                    <TextField
                        type='date'
                        style={{width:'100%'}}
                        data-date-split-input="true"
                        margin="normal"
                        fullwidth
                        id="birthday"
                        label="Birthday"
                        name="birthday"
                        value = {birthday}
                        className="my-1 p-1 w-full"
                        onChange={this.onChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />

                <TextField
                    style={{width:'100%'}}
                    type="text"
                    margin="normal"
                    fullwidth
                    id="tag"
                    label="Tag"
                    name="tag"
                    value = {tag}
                    className="my-1 p-1 w-full"
                    onChange={this.onChange}
                    required  
                    fullWidth 
            />  
               
                
                

                    
          
               

                {/* <InputLabel>City1
                    <Select
                    value={city}
                    onChange={handleCitySelection}>        
                        <MenuItem value="Vancouver">Vancouver</MenuItem>
                        <MenuItem value="Toronto">Toronto</MenuItem>
                    </Select>
                </InputLabel> */}
                 
             
                <br />
                <div>
                    <InputLabel style={{marginTop:'250px' }}>Image</InputLabel>
                    
                    <input
                        style={{marginTop:'40px', width:'100%' }}
                        type="url"
                        margin="normal"
                        fullwidth
                        id="img"
                        label="Image"
                        name="img"
                        value= {img}
                        className="my-1 p-1 w-full"
                        placeholder="Image"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={this.onChange} 
                        required
                    /> 
                </div>
            <br />
            <br />
 
                <Button onClick = {(event) => {this.onSubmit(event)}} className="w-full bg-blue-400 text-white py-3" variant="contained" size="medium" color="primary">
                    <Typography component="body1" variant="body1">
                    Add Birthday
                    </Typography>
                </Button>

            
            </FormControl>
            </Grid>
            </div>
            
         
        </div>
    );
}
}
export default withStyles(styles,{withTheme:true})(AddBDay);
