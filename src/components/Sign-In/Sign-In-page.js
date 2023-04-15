import React from "react";
import './SignInPage.css';
import appleicon from './apple-icon.svg';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";

var userdata;
export default function SignInPage() {

    function loggednin(response) {
        userdata=jwtDecode(response.credential);
        console.log("Name : "+userdata.name)    
        console.log("email : "+userdata.email)    
        console.log("Picture : "+userdata.picture)    
    }

    return (
        <>
            <div className="side-board">
                <h1 className="side-board-heading">Board.</h1>
            </div>
            <div className="white-part">
                <div className="sign-in-outer">
                    <p className="sign-in-heading">Sign In</p>
                    <p style={{ fontFamily: 'Lato', margin: "5px" }}>Sign into your account</p>
                    <div classname="button-cover" style={{ display: "flex", justifyContent: "space-between", margin: "25px 0px" }}>

                        {/* <img src={googleicon} alt="Not loading" />
                            Sign In with Google */}
                        <GoogleLogin onSuccess={loggednin} />

                        <div className="white-buttons">
                            <img src={appleicon} alt="Not loading" />
                            Sign In with Apple
                        </div>
                    </div>
                    <div className="form-outer">
                        <label>Email address</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" />
                        <p className="forgot">Forgot password?</p>
                        <div className="main-sign-in-button">Sign In</div>
                    </div>
                </div>
                <p className="register">Don't have an account? <span className="resgister2">Register here</span></p>
            </div>
        </>
    )
}