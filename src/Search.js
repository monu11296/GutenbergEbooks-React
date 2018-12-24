import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => { 
        e.preventDefault();
        const query = e.target.value;
        this.props.onChange(query);
    }

    render(){
        return(
            <div>
                <br />
                <input type="text" placeholder="Search for..." onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default Search;
