import React from "react";
import '../../assets/css files/signup.css'


export default function Signup() {
    return (
        <div className="fullscreen">
            <div className="circle_background">

            </div>
            <div className="signup-form_background">
                <div className="signup_title">
                    <p className="andantedisplay-bold-blue-64px">
                        CREATE ACCOUNT
                    </p>
                    
                </div>
                <form className="signup_form">
                    <input type="text" className="signup_input andantetext-regular-black-32px" placeholder="name" />
                    <input type="text" className="signup_input andantetext-regular-black-32px" placeholder="e-mail" />
                    <input type="text" className="signup_input andantetext-regular-black-32px" placeholder="password" />
                    <input type="button" className="signup_button andantetext-bold-white-48px" value="SIGN UP" />
                </form>

                <div className="sign-up_msg">
                    <p> <span className="andantetext-regular-black-20px">Already have an account? </span><span className="andantetext-bold-blue-20px">Log In</span> </p>
                </div>
                
            </div>
        </div>
    );
}