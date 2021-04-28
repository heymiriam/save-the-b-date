import React from 'react';
import SearchBar from "material-ui-search-bar";
import background from "../assets/cover-img.jpeg";
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
                <Typography style={{color:"white", marginTop:"100px"}} align="center" component="h1" variant="h2">
                    Remember a b-date
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