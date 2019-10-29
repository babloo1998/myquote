import React, { Component } from 'react';

class Viewpost extends Component{

    onClickHandler = (event) =>{
        const target = event.target.value;
        this.props.history.push("/allpost",this.props.match.params={target})
    }
    render(){
        return(
            <div className="viewpost">
                <button value = "love" onClick = {this.onClickHandler} className="btn btn-danger">Love</button>
                <button value = "life" onClick = {this.onClickHandler} className="btn btn-danger">Life</button>
                <button value = "shayari" onClick = {this.onClickHandler} className="btn btn-danger">Shayari</button>
                <button value = "sorry" onClick = {this.onClickHandler} className="btn btn-danger">Sorry</button>
                <button value = "humour" onClick = {this.onClickHandler} className="btn btn-danger">Humour</button>
                <button value = "erotic" onClick = {this.onClickHandler} className="btn btn-danger">Erotic</button>
                <button value = "random" onClick = {this.onClickHandler} className="btn btn-danger">Random</button>
            </div>
        );
    }
}

export default Viewpost;