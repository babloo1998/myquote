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
        const target = this.props.history.location.state.target;
        if(target === "love"){
        axios.get('https://jsonbox.io/box_1db29d1e0a534d5a8cf8').then(resp => {
            this.setState({
                data:resp.data
            })
        })
        }
        else if(target === "life"){
            axios.get('https://jsonbox.io/box_079dd24ca8b8a73a6089').then(resp => {
                this.setState({
                    data:resp.data
                })
            })
        }
        else if(target === "shayari"){
            axios.get('https://jsonbox.io/box_8db6c56a3857a94b255c').then(resp => {
                this.setState({
                    data:resp.data
                })
            })
        }
        else if(target === "sorry"){
            axios.get('https://jsonbox.io/box_f1af4cfd487a99195128').then(resp => {
                this.setState({
                    data:resp.data
                })
            })
            }
            else if(target === "humour"){
                axios.get('https://jsonbox.io/box_f7a21cd90a65521b3b5a').then(resp => {
                    this.setState({
                        data:resp.data
                    })
                })
            }
            else if(target === "erotic"){
                axios.get('https://jsonbox.io/box_889f51fa3b30d3f9fc40').then(resp => {
                    this.setState({
                        data:resp.data
                    })
                })
            }
            else{
                axios.get('https://jsonbox.io/box_bcad4e3ef86ec3386014').then(resp => {
                    this.setState({
                        data:resp.data
                    })
                })
            }
}

    sendID = (id) =>{
        this.setState({
            isLoading:  true
        });

        const target = this.props.history.location.state.target;
        if(target === "love"){
        axios.delete(`https://jsonbox.io/box_1db29d1e0a534d5a8cf8/${id}`)   
        .then(res => {
            this.getMyDataBack();
      })
        }
        else if(target === "life"){
        axios.delete(`https://jsonbox.io/box_079dd24ca8b8a73a6089/${id}`)   
        .then(res => {
            this.getMyDataBack();
        })
            
            
        }
        else if(target === "shayari"){
        axios.delete(`https://jsonbox.io/box_8db6c56a3857a94b255c/${id}`)   
        .then(res => {
            this.getMyDataBack();
        })
        }
        else if(target === "sorry"){
        axios.delete(`https://jsonbox.io/box_f1af4cfd487a99195128/${id}`)   
        .then(res => {
            this.getMyDataBack();
        })
        }
        else if(target === "humour"){
        axios.delete(`https://jsonbox.io/box_f7a21cd90a65521b3b5a/${id}`)   
        .then(res => {
            this.getMyDataBack();
        })
            }
            else if(target === "erotic"){
            axios.delete(`https://jsonbox.io/box_889f51fa3b30d3f9fc40/${id}`)   
            .then(res => {  
            this.getMyDataBack();
        })
            }
            else{
            axios.delete(`https://jsonbox.io/box_bcad4e3ef86ec3386014/${id}`)   
            .then(res => {
            this.getMyDataBack();
            })
        }
    }
    
    getMyDataBack =()=>{
        const target = this.props.history.location.state.target;
        if(target === "love"){
            axios.get('https://jsonbox.io/box_1db29d1e0a534d5a8cf8').then(resp => {
                this.setState({
                    data:resp.data,
                    isLoading: false
                })
            })
            }
            else if(target === "life"){
                axios.get('https://jsonbox.io/box_079dd24ca8b8a73a6089').then(resp => {
                    this.setState({
                        data:resp.data,
                        isLoading: false
                    })
                })
            }
            else if(target === "shayari"){
                axios.get('https://jsonbox.io/box_8db6c56a3857a94b255c').then(resp => {
                    this.setState({
                        data:resp.data,
                        isLoading: false
                    })
                })
            }
            else if(target === "sorry"){
                axios.get('https://jsonbox.io/box_f1af4cfd487a99195128').then(resp => {
                    this.setState({
                        data:resp.data,
                        isLoading: false
                    })
                })
                }
                else if(target === "humour"){
                    axios.get('https://jsonbox.io/box_f7a21cd90a65521b3b5a').then(resp => {
                        this.setState({
                            data:resp.data,
                            isLoading: false
                        })
                    })
                }
                else if(target === "erotic"){
                    axios.get('https://jsonbox.io/box_889f51fa3b30d3f9fc40').then(resp => {
                        this.setState({
                            data:resp.data,
                            isLoading: false
                        })
                    })
                }
                else{
                    axios.get('https://jsonbox.io/box_bcad4e3ef86ec3386014').then(resp => {
                        this.setState({
                            data:resp.data,
                            isLoading: false
                        })
                    })
                }
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
                           <div className="d-flex justify-content-between" style={{background:"#977390",padding: "10px"}}>
                                <p className="post-date" style = {{margin: "0px"}}>{data.date}</p>
                           </div>
                           
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