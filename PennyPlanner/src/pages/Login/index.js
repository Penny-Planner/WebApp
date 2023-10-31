import React, { useState } from "react";
import '../../assets/css files/login.css'
import { useNavigate, Link } from "react-router-dom";


export default function Login() {

    //set variables
    const navigate = useNavigate();
    const [emailSet, setEmailSet] = useState(false)
    const [emailValue, setEmailValue] = useState('')
    const [passwordSet, setPasswordSet] = useState(false)
    const [passwordValue, setPasswordValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    //event handling
    const handleKeyEvent = (event) => {
        if (event.key === "enter") {
            handleLogin()
        }
    }

    //check email input
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase())
    }

    //detect input
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
        setEmailSet(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value)
        setPasswordSet(event.target.value)
        setErrorMessage('')
    }

    //handle login inputs
    const handleLogin = () => {

        if (!emailSet && passwordSet) {
            setErrorMessage('Bitte geben Sie Ihre E-Mail-Adresse ein')
        } else if (emailSet && isValidEmail(emailValue) && !passwordSet) {
            setErrorMessage('Bitte geben Sie Ihr Passwort ein')
        } else if (emailSet && !isValidEmail(emailValue) && !passwordSet) {
            setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse und Ihr Passwort ein')
        } else if (!emailSet && !passwordSet) {
            setErrorMessage('Bitte geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein')
        } else if (emailSet && passwordSet && !isValidEmail(emailValue)) {
            setErrorMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein')
        } else {
            setErrorMessage("Loading...")
            console.log({emailValue}, {passwordValue});
            // sendDataToAPI(emailValue, passwordValue)
        }
    }

    //Send data to API endpoint

    // const sendDataToAPI = async () => {
    //     var obj = {
    //         Email: emailValue,
    //         Password: passwordValue
    //     }
    //     const response = await fetch('api link', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(obj),
    //     });

    //     if (response.ok) {
    //         setErrorMessage('Connection established')
    //         document.cookie = "token=" + (await response.json()).Response.Token;
    //         navigate('/home')
    //     }
    //     var error = await response.json();
    //     setErrorMessage(error.Error.Reason);
    // };


    return (
        <div className="fullscreen">
            <div className="circle_background">

            </div>
            <div className="login-form_background">
                <div className="login_title">
                    <p className="andantedisplay-bold-blue-64px">
                        LOG INTO YOUR <br/> ACCOUNT
                    </p>
                </div>
                <div className="login_form">
                    {/* <input type="text" className="login_input andantetext-regular-black-32px" placeholder="e-mail" /> */}
                    <EmailInputField placeholder="e-mail" onChange={handleEmailChange} />
                    <PasswordInputField placeholder="password" onChange={handlePasswordChange}/>
                </div>
                <div className="pw_msg">
                    <p className="andantetext-regular-black-20px">Forgot your password?</p>
                </div>
                <div className="login-button_container">
                    {/* <input type="button" className="login_button andantetext-bold-white-48px" value="LOGIN" /> */}
                    <LoginButton placeholder="LOGIN" onClick={handleLogin}/>
                </div>



                <div className="log-in_msg">
                    <p> <span className="andantetext-regular-black-20px">Don't have an account? </span><Link to="/signup"><span className="andantetext-bold-blue-20px">Sign Up</span></Link> </p>
                </div>
            </div>
        </div>
    );
}


function EmailInputField({ placeholder, onChange }) {

    //set up variables and input handling
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)
        onChange(event)
    }

    return (
            <input className="login_input andantetext-regular-black-32px"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
    )
}

function PasswordInputField({ placeholder, onChange }) {

    //set up variables and input handling
    const [displayValue, setDisplayValue] = useState('')
    const handleChange = (event) => {
        setDisplayValue(event.target.value)
        onChange(event)
    }

    return (
            <input 
                className="login_input andantetext-regular-black-32px"
                type="password"
                value={displayValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
    )
}

function LoginButton({placeholder, onClick}) {
    return(
        <input
            className="login_button andantetext-bold-white-48px"
            type="button"
            onClick={onClick}
            value={placeholder}

        />
    )
}