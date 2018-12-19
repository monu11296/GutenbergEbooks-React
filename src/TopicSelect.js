import React, { Component } from 'react';

class TopicSelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            clickValue: null
        };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick = (e) => { 
        e.preventDefault();
        this.setState ({clickValue: e.target.value })
        const myval = this.state.clickValue 
        const query = e.target.value;
        
        if(query !== myval )
            this.props.onClick(query);
      }
      
    render(){
        return(
           <div>
               <input type="button" value="Fiction" onClick={this.handleClick}/>
               <input type="button" value="Drama" onClick={this.handleClick}/>
               <input type="button" value="Philosophy" onClick={this.handleClick}/>
               <input type="button" value="Humor" onClick={this.handleClick}/>
               <input type="button" value="History" onClick={this.handleClick}/>
           </div>
        );
    }
}

export default TopicSelect;