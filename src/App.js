import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import DisplayData from './DisplayData.js';
import TopicSelect from './TopicSelect.js';


import axios from 'axios';

const API = 'http://gutendex.com/books.json/?mime_type=image';
//const API = 'http://skunkworks.ignitesol.com:8000/books.json/?mime_type=image';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      error: null,
      query: null,
      loading: false
    };
    

    this.clickChange = this.clickChange.bind(this);
  }

    clickChange (newTopic){
      this.setState({ query: newTopic, loading: true })

      axios.get(API, {
        params: {topic: newTopic}
      })
        .then(res => this.setState({ results: res.data.results, loading: false}))
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
        <h1>React based Gutendex.com eBooks </h1>
        <TopicSelect onClick={this.clickChange}/>
        <DisplayData  results={this.state.results}  myQuery={this.state.query}  loading={this.state.loading}/>
        </div>
      </ul>

    );
  }
}

export default App;
