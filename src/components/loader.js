import React, { Component } from 'react';

class Loading extends Component{
    render(){
        return(
            <div className="loading">
                <img src="https://loading.io/spinners/ball/lg.bouncing-circle-loading-icon.gif" className="loading" alt="Carregando..." />
            </div>
        );
    }
}

 export default Loading; 