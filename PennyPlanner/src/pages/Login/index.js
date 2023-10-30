import React from "react";
import '../../assets/css files/login.css'


export default function Login() {
    return(
        <div className="fullscreen">
            <div className="circle_background">
                
            </div>
            <div className="login-form_background">
                <p className="login_title">
                    Log Into Your Account
                </p>
                <input type="text" className="login_input" placeholder="e-mail" />
                <input type="text" className="login_input" placeholder="password" />
                <p className="pw_msg">Forgot your password?</p>
                <input type="button" className="login_button" value="LOGIN" />
                <p className="sign-up_msg">Don't have an account? Sign Up</p>
            </div>
        </div>
    );
}