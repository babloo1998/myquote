import React, { Component } from 'react';
import Loader from '../components/loader'

const axios = require('axios').default;

class AllPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isLoading: false
        }
    }
    componentDidMount(){
        axios.get('https://jsonbox.io/box_bcad4e3ef86ec3386014').then(resp => {
            this.setState({
                data:resp.data
            })
        });
    }

    sendID = (id) =>{
        this.setState({
            isLoading:  true
        });
        axios.delete(`https://jsonbox.io/box_bcad4e3ef86ec3386014/${id}`)   
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.getMyDataBack();
      })
    }
    
    getMyDataBack =()=>{
        axios.get('https://jsonbox.io/box_bcad4e3ef86ec3386014').then(resp => {
            console.log("@@@@@",resp.data)
            this.setState({
                data:resp.data,
                isLoading:false
            })
        });
    }
  render() {
    return (
    <div className="allpost">
      <h2>All Posts</h2>  
      {console.log("####################",this.state.isLoading)}
     {
        this.state.isLoading?
            <Loader/>:<div>
                {this.state.data.map((data, id) => (
                       <div className="posts" key = {id}>
                           <div className="post-nav">
                               <p className="post-title">{data.title}</p>
                               <img alt="img" onClick={() =>{this.sendID(data._id)}} src="https://cdn2.iconfinder.com/data/icons/medical-and-health-2-16/65/64-512.png"></img>    
                           </div>
                           <p className="post-message">{data.message}</p>
                           <p className="post-date">{data.date}</p>
                       </div>
                   ))
                  }
                </div>
      
     }
        
    </div>
    );
   }
}

export default AllPost;