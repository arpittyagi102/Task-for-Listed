import React from "react";
import './SignInPage.css';
import appleicon from './apple-icon.svg';
import { useGoogleLogin } from '@react-oauth/google';
import googleicon from './google-icon.svg'
import { Link } from "react-router-dom";

export default function SignInPage() {

    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
        redirect_uri:"https://taskforlisted.netlify.app/dashboard",
      });

    return (
        <>
            <div className="side-board">
                <h1 className="side-board-heading">Board.</h1>
            </div>
            <div className="white-part">
                <div className="sign-in-outer">
                    <p className="sign-in-heading">Sign In</p>
                    <p style={{ fontFamily: 'Lato', margin: "5px" }}>Sign into your account</p>
                    <div className="button-cover">

                        {/* <img src={googleicon} alt="Not loading" />
                            Sign In with Google */}
                        <div className="white-buttons" id="b1" onClick={() => login()}>
                            <img src={googleicon} alt="Not loading" />
                            <p>Sign In with Google</p>
                        </div>
                        <div className="white-buttons" id="b2">
                            <img src={appleicon} alt="Not loading" />
                            <p>Sign In with Apple</p>
                        </div>
                    </div>
                    <div className="form-outer">
                        <label className="label">Email address</label>
                        <input className="input" type="text" />
                        <label className="label">Password</label>
                        <input className="input" type="password" />
                        <p className="forgot">Forgot password?</p>
                        <Link to={'./dashboard'} style={{ "textDecoration": "none" }}>
                            <div className="main-sign-in-button">Sign In</div>
                        </Link>
                    </div>
                </div>
                <p className="register">Don't have an account? <span className="resgister2">Register here</span></p>
            </div>
        </>
    )
}