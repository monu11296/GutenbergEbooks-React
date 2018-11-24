import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import DisplayData from './DisplayData.js';
import axios from 'axios';
//import axios from 'axios-jsonp-pro';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      error: null,
    };
  }

  
  componentDidMount() {


   // fetch('http://gutendex.com/books/?topic=fiction&mime_type=image')
  //axios.get('http://skunkworks.ignitesol.com:8000/books/?topic=fiction&mime_type=image')

  axios.get('http://gutendex.com/books.json/?mime_type=image')

     //.then(data => this.setState({ results: data.results }))
     .then(res => this.setState({ results: res.data.results }))
      .catch(error => this.setState({error: 'Hi'}));

  }

  render() {

    return (
        <ul>
          <div className='DisplayData'>
          <DisplayData  results={this.state.results}  />
          </div>
        </ul>

    );
  }
}

export default App;
