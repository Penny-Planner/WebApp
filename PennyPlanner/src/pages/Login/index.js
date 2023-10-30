import React from "react";
import '../../assets/css files/login.css'


export default function Login() {
    return (
        <div className="fullscreen">
            <div className="circle_background">

            </div>
            <div className="login-form_background">
                <div className="login_title">
                    <p className="andantedisplay-bold-blue-64px">
                        LOG INTO YOUR ACCOUNT
                    </p>
                </div>
                <form className="login_form">
                    <input type="text" className="login_input andantetext-regular-black-32px" placeholder="e-mail" />
                    <input type="text" className="login_input andantetext-regular-black-32px" placeholder="password" />
                    <p className="pw_msg andantetext-regular-black-20px">Forgot your password?</p>
                    <input type="button" className="login_button andantetext-bold-white-48px" value="LOGIN" />
                </form>

                <div className="sign-up_msg">
                    <p> <span className="andantetext-regular-black-20px">Already have an account? </span><span className="andantetext-bold-blue-20px">Log In</span> </p>
                </div>
            </div>
        </div>
    );
}