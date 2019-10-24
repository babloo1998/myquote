import React from 'react';
import Post from './components/Post'
import './App.css';
import AllPost from './components/allPost';
import './main.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/googleLogin';
import Navigation from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="post-container d-flex justify-content-around">
        <Router>
          <Route exact path = '/' component = {Login}/>
          <Route exact path = '/post' component = {Post}/>
          <Route exact path = '/allpost' component = {AllPost}/>
        </Router>
          
      </div>
    </div>
  );
}

export default App;
