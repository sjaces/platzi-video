import React, { Component } from 'react';
import SearchInput from '../components/search';

class Search extends Component {
    handleInputSubmit = (event) => {
        event.preventDefault();
        console.log(this.input.value, "submit");
    }
    
    setInputRef = element => {
        this.input = element;
    }

    render(){
        return (
            <SearchInput
                handleSubmit = {this.handleInputSubmit}

                setRef = {this.setInputRef}
             />
        )
    }
}

export default Search