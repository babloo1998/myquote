import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <div className="navbar navbar-light bg-light Navigation">
                <a className="navbar-brand" width="30" height="30" className="d-inline-block align-top" href="/">Blogging</a>
                <img src="https://cdn1.iconfinder.com/data/icons/internet-28/48/5-512.png" alt="img"></img>
            </div>       
        );
    }
}

export default Navigation;
