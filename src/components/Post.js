import React, {Component} from 'react';
import uuid from 'uuid';
import Swal from 'sweetalert2';

var moment = require('moment');

const axios = require('axios').default;

class Post extends Component{

    handleSubmit = (e) =>{
        e.preventDefault();
        Swal.fire(
            'Great!',
            'Your Post Have been published',
            'success'
          );
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        axios({
            method: 'post',
            url: 'https://jsonbox.io/box_bcad4e3ef86ec3386014',
            data: {
                id:uuid(),
                title: title,
                message: message,  
                date: moment().format("MMM Do YY"), 
            }
          });
    }


    onClickHandler = () =>{
        this.props.history.push("/allpost",{id :this.props.location.key})
    }


    componentDidMount(){
        console.log("######",this.props)
    }
   


    render(){
        return(
            <div className="post">
                <h2>Create A Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control title" required type="text" placeholder="Enter Title Here!!" ref={(input)=>this.getTitle = input} ></input><br></br>
                    <textarea className="form-control" type="required" placeholder="Enter post here!!" rows="5" cols="28" ref={(input)=>this.getMessage = input} ></textarea>
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