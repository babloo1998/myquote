import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
 
class Login extends Component {
    responseGoogle = (response) => {
        console.log(response,this.props);
        this.props.history.push("post")
      }

    onClickHandler = () =>{
        this.props.history.push("allpost")
    }  
      
    render(){
        return(
            <div className="googleLogin">
                <GoogleLogin
                    clientId="65098940793-s974qqjqe08olac640lkefml1sdbm82f.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            <br></br>
            <button className="btn btn-danger" onClick={this.onClickHandler}>view post</button>
            </div>
        )
    }
}

export default Login;