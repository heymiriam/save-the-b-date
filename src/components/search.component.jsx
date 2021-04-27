import React from 'react';
import SearchBar from "material-ui-search-bar";
import background from "../assets/cover-img.jpeg";

const Search=() =>{
    return(
        <div style={{backgroundImage:`url(${background})` }}>
            <h1>Remember a b-date</h1>
            <SearchBar/>
        </div>
    )
}
// onRequestSearch={() => doSomethingWith(this.state.value)}
//                onChange={(newValue) => this.setState({ value: newValue })}
//value={this.state.value}
export default Search;