import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import DisplayData from './DisplayData.js';


import axios from 'axios';

const API = 'http://gutendex.com/books.json/?mime_type=image';
//const API = 'http://skunkworks.ignitesol.com:8000/books.json/?mime_type=image';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      error: null,
      query: 'Fiction'
    };
    
    this.changeQuery = this.changeQuery.bind(this);
  }

    changeQuery (newTopic){
      this.setState({ query: newTopic })

      axios.get(API, {
        params: {topic: newTopic}
      })
        .then(res => this.setState({ results: res.data.results }))
    }


  fetchData(){
    axios.get(API, {
      params: {topic: this.state.query}
    })
      //.then(data => this.setState({ results: data.results }))
      .then(res => this.setState({ results: res.data.results }))
      .catch(error => this.setState({error: 'Hi'}));
  }

  componentDidMount() {
  //fetch('http://gutendex.com/books/?topic=fiction&mime_type=image')
  /*
            axios.get(API, {
              params: {topic: this.state.query}
            })
              //.then(data => this.setState({ results: data.results }))
              .then(res => this.setState({ results: res.data.results }))
              .catch(error => this.setState({error: 'Hi'}));
*/
          this.fetchData();
  }

/*
  componentDidUpdate(prevProps){
    if( this.state.query !== prevProps.myQuery ){
        //alert('Component is done rendering!');

        axios.get(API, {
          params: {topic: this.state.query}
        }).then(res => this.setState({
            results: res.data.results }))
            
    }
   // return true;
  }
*/

render() {

    return (

      <ul>
        <div className='DisplayData'>
        <DisplayData  results={this.state.results}  onChange={this.changeQuery} myQuery={this.state.query}  />
        </div>
      </ul>

    );
  }
}

export default App;
