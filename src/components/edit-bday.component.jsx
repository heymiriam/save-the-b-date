import React, { Component, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
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
import firebase from '../firebase/firebase.util';
import { withStyles } from "@material-ui/core/styles";


   const styles = theme =>({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:'center'
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
    });

    class EditBDay extends Component{
    constructor(props) {
    super(props);
    this.state = {
      key:'',  
      name: '',
      birthday: '',
      tag: '',
      img:'',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('bdate').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const bdate = doc.data();
        this.setState({
          key: doc.id,
          name: bdate.name,
          birthday: bdate.birthday,
          tag: bdate.tag,
          img:bdate.img,
        });
      } else {
        console.log("Try again");
      }
    });
  }

  onChange = (event) => {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState({bdate:state});
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { name, birthday, tag, img } = this.state;
    const updateRef = firebase.firestore().collection('bdate').doc(this.state.key);
    updateRef.set({
      name,
      birthday,
      tag,
      img,
    }).then((docRef) => {
      this.setState({
        key: '',
        name: '',
        birthday: '',
        tag: '',
        img:'',
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("try again: ", error);
    });
  }
    render(){
    //const { name, birthday, tag, img } = this.state;
    const {classes} = this.props;
    return(
    
        <div>
           
        <div >  
            <div style={{height:"400px",backgroundImage:`url('https://images.unsplash.com/photo-1529244927325-b3ef2247b9fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)`}}>
            
            </div>
            <h1 style={{textAlign:'center', }}>Edit a Birthday</h1>
            <Grid container style={{ width: '90%'}}>
        <Grid item xs={12} sm={12} md={5} />
            <FormControl className='formWidth' style={{width:'30%'}}>
                
            <TextField
                    style={{width:'100%'}}
                    type="text"
                    margin="normal"
                    fullwidth
                    id="name"
                    label="Name"
                    name="name"
                    className="my-1 p-1 w-full"
                    onChange={this.onChange}
                    required  
                    fullWidth 
            />
            
            
            <TextField
                        type='date'
                        style={{width:'100%'}}
                        data-date-split-input="true"
                        margin="normal"
                        fullwidth
                        id="birthday"
                        label="Birthday"
                        name="birthday"
                        
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
                  
                    className="my-1 p-1 w-full"
                    onChange={this.onChange}
                    required  
                    fullWidth 
            />  
                <div>
                    <InputLabel style={{marginTop:'200px' }}>Image</InputLabel>
                    
                    <input
                        style={{marginTop:'40px', width:'100%' }}
                        type="url"
                        margin="normal"
                        fullwidth
                        id="img"
                        label="Image"
                        name="img"
                    
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
 
                <Button style={{backgroundColor:"#0099f2"}} onClick = {(event) => {this.onSubmit(event)}} className="w-full bg-blue-400 text-white py-3" variant="contained" size="medium" color="primary">
                    <Typography component="body1" variant="body1">
                    Edit Birthday
                    </Typography>
                </Button>

            
            </FormControl>
            </Grid>
            </div>
            
         
        </div>
    
    );
}
}
export default withStyles(styles,{withTheme:true})(EditBDay);
