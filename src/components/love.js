// import React, { Component } from 'react';
// import axios from 'axios'

// class Love extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             data: [],
//             isLoading: false
//         }
//     }
//     componentDidMount(){
//         axios.get('https://jsonbox.io/box_2e8733eb78d353d92bd6').then(resp => {
//             this.setState({
//                 data:resp.data
//             })
//         });
//     }
//     render(){
//         return(
//             <div className="love">
//                 <h2>Love Quotes</h2>
//                 {this.state.data.map((data, id) => (
//                        <div className="posts" key = {id}>
//                            <div className="post-nav">
//                                <p className="post-title">{data.title}</p>
//                                <img alt="img" onClick={() =>{this.sendID(data._id)}} src="https://cdn2.iconfinder.com/data/icons/medical-and-health-2-16/65/64-512.png"></img>    
//                            </div>
//                            <p className="post-message">{data.message}</p>
//                            <p className="post-date">{data.date}</p>
//                        </div>
//                    ))
//                   }
//                 </div>
//         )
//     }
// }

// export default Love;
