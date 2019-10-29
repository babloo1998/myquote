import React, {Component} from 'react';
import uuid from 'uuid';
import Swal from 'sweetalert2';

var moment = require('moment');

const axios = require('axios').default;

class Post extends Component{
    constructor(props){
        super(props);
            this.state = {
                type: 'love'
            }
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        Swal.fire(
            'Great!',
            'Your Post Have been published',
            'success'
          );
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const type = this.state.type;
        if(type === "love"){
            axios({
                method: 'post',
                url: 'https://jsonbox.io/box_1db29d1e0a534d5a8cf8',
                data: {
                    id:uuid(),
                    title: title,
                    message: message,  
                    date: moment().format("MMM Do YY"), 
                    type: type
                }
              });
        }
        else if(type === "life"){
            axios({
                method: 'post',
                url: 'https://jsonbox.io/box_079dd24ca8b8a73a6089',
                data: {
                    id:uuid(),
                    title: title,
                    message: message,  
                    date: moment().format("MMM Do YY"), 
                    type: type
                }
              });
    }
    else if(type === "shayari"){
        axios({
            method: 'post',
            url: 'https://jsonbox.io/box_8db6c56a3857a94b255c',
            data: {
                id:uuid(),
                title: title,
                message: message,  
                date: moment().format("MMM Do YY"), 
                type: type
            }
          });
    }
    else if(type === "sorry"){
        axios({
            method: 'post',
            url: 'https://jsonbox.io/box_f1af4cfd487a99195128',
            data: {
                id:uuid(),
                title: title,
                message: message,  
                date: moment().format("MMM Do YY"), 
                type: type
            }
          });
    }
    else if(type === "humour"){
        axios({
            method: 'post',
            url: 'https://jsonbox.io/box_f7a21cd90a65521b3b5a',
            data: {
                id:uuid(),
                title: title,
                message: message,  
                date: moment().format("MMM Do YY"), 
                type: type
            }
          });
    }
    else if(type === "erotic"){
        axios({
            method: 'post',
            url: 'https://jsonbox.io/box_889f51fa3b30d3f9fc40',
            data: {
                id:uuid(),
                title: title,
                message: message,  
                date: moment().format("MMM Do YY"), 
                type: type
            }
          });
    }
    else {
        axios({
            method: 'post',
            url: 'https://jsonbox.io/box_bcad4e3ef86ec3386014',
            data: {
                id:uuid(),
                title: title,
                message: message,  
                date: moment().format("MMM Do YY"), 
                type: type
            }
          });
        }
    }
    onClickHandler = () =>{
        this.props.history.push("/viewpost",{id :this.props.location.key})
    }
    handleChange = (e) =>{
        this.setState({type: e.target.value})
        console.log("!!!!!",this.state.type)
    }

    render(){
        return(
            <div className="post">
                <h2>Create A Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control title " required type="text" placeholder="Author Name here!!" ref={(input)=>this.getTitle = input} ></input><br></br>
                    <div className="dropdown">
                        <select required onChange={this.handleChange}>
                            <option value="love">Love</option>
                            <option value="life">Life</option>
                            <option value="shayari">Shayari</option>
                            <option value="sorry">Sorry</option>
                            <option value="hummour">Humour</option>
                            <option value="erotic">Erotic</option>
                            <option value="random">Random</option>
                        </select>
                        </div>    
                    <textarea className="form-control" required type="required" placeholder="Enter Quote here!!" rows="5" cols="28" ref={(input)=>this.getMessage = input} ></textarea>
                    <div className="button-wrapper">
                        <button className="btn btn-danger">Post</button>
                        <button onClick={this.onClickHandler} className="btn btn-danger">View Post</button>
                    </div>
                    </form>
            </div>
        );
    }
}

export default Post;