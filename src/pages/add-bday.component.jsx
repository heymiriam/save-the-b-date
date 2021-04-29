import React, { useState, useContext } from 'react'
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
//import NavBar from './Nav-Footer/NavBar'
//import Bottom from './Nav-Footer/Bottom'
//import useStyles from '../styles/styles'
//import { storage } from "../firebase/firabase.util"
//import { EventContext } from "../providers/EventProvider";


const AddBDay = (props)=>{
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
        e.preventDefault()

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
    }
    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
    const classes = useStyles();
    return(
    
        <>
        <Grid container style={{ minHeight: ''}}>
        <Grid item xs={12} sm={12} md={5} />
        <div >  

            <h1 style={{textAlign:'center'}}>Add a Birthday</h1>
            
            <FormControl className='formWidth'>
                
            <TextField
                    type="text"
                    margin="normal"
                    fullwidth
                    id="title"
                    label="Name"
                    name="Name"
                    value = {name}
                    className="my-1 p-1 w-full"
                    placeholder="Name"
                    onChange={(e) => {setName(e.target.value)}}
                    required     
            />
            
                <br />
            
                <br/>
                <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <TextField
                        style={{width:'45%'}}
                        type="date"
                        margin="normal"
                        fullwidth
                        id="date"
                        error={setDate === ""}
                        helperText={setDate === "" ? 'Empty field!' : ' '}
                        label="Date"
                        name="date"
                        value = {date}
                        className="my-1 p-1 w-full"
                        onChange={(e) => {setDate(e.target.value)}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                    />


                <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                <Select
                labelId="tag"
                id="tag"
                value={tag}
                onChange={handleChange}
                onChange={(e) => {setTag(e.target.value)}}
                required
                >
                <MenuItem value={tag.friends}>Friends</MenuItem>
                <MenuItem value={tag.famliy}>Family</MenuItem>
                <MenuItem value={tag.work}>Work</MenuItem>
                </Select>
                   

                    
          
               

                {/* <InputLabel>City1
                    <Select
                    value={city}
                    onChange={handleCitySelection}>        
                        <MenuItem value="Vancouver">Vancouver</MenuItem>
                        <MenuItem value="Toronto">Toronto</MenuItem>
                    </Select>
                </InputLabel> */}
                 
                </div> 
                <br />
                <div>
                    <InputLabel style={{marginTop:'430px' }}>Image</InputLabel>
                    
                    <input
                        style={{marginTop:'40px', width:'100%' }}
                        type="file"
                        margin="normal"
                        fullwidth
                        id="image"
                        label="Image"
                        name="image"
                        className="my-1 p-1 w-full"
                        placeholder="Image"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange} 
                        required
                    /> 
                </div>
            <br />
            <br />
 
                <Button onClick={submitHandler} className="w-full bg-blue-400 text-white py-3" variant="contained" size="medium" color="primary">
                    <Typography component="h5" variant="h5">
                    Add Birthday
                    </Typography>
                </Button>

            
            </FormControl>
            </div>
            </Grid>
         
        </>
    )
};

export default AddBDay;