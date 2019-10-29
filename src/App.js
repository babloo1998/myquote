import React, { Component } from 'react';

//styling
import './App.css';
import './main.css';

//NPM module
import {BrowserRouter as Router, Route} from 'react-router-dom';

//components
import Login from './components/googleLogin';
import Navigation from './components/navbar';
import Viewpost from './components/viewPost';
import Post from './components/Post'
import AllPost from './components/allPost';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fromChild : "",
    }
  }

  callbackFunction = (childData) => {
    this.setState({message: childData})
  }

  render(){
  return (
    <div className="App">
      <Navigation/>
      <div className="post-container d-flex justify-content-around">
        <Router>
          <Route exact path = '/' component = {Login}/>
          <Route exact path = '/post' component = {Post}/>
          <Route exact path = '/allpost' component = {AllPost}/>
          <Route exact path = '/viewpost' component = {Viewpost}/>
          {/* <Route exact path = '/love' component = {Love}/> */}
        </Router>
      </div>
    </div>
  );
}
}

export default App;
