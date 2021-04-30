import React from 'react';
import SearchBar from "material-ui-search-bar";
import background from "../assets/cover-img.jpeg";
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from "../assets/logo-white.svg";

const Search=() =>{

    const style = makeStyles(theme=>({
        bgpos:{
            backgroundPosition: "bottom center",
        },
        searchbar:{
            width:"40%",
        }
        
    }))
    const classes = style()
    const theme = useTheme();

    return(
        <div style={{backgroundImage:`url(${background})`, height:"500px" }}  className={classes.bgpos}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" alignItems="center">
                <img src={logo} style={{width:'500px',marginTop:'50px'}}></img>
                <Typography style={{color:"white", marginTop:"40px"}} align="center" component="h5" variant="h5">
                    Remember that birthday you always forget
                </Typography>
                <SearchBar className={classes.searchbar} style={{marginTop:"60px"}}/>
            </Box>
        </div>
    )
}
// onRequestSearch={() => doSomethingWith(this.state.value)}
//                onChange={(newValue) => this.setState({ value: newValue })}
//value={this.state.value}
export default Search;