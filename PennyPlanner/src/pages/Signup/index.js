import React, {useState} from "react";
import '../../assets/css files/signup.css'
import {Link, useNavigate} from 'react-router-dom'


export default function Signup() {

    //set up variables
    //set variables
    const navigate = useNavigate();
    const [nameSet, setNameSet] = useState(false)
    const [nameValue, setNameValue] = useState('')
    const [emailSet, setEmailSet] = useState(false)
    const [emailValue, setEmailValue] = useState('')
    const [passwordSet, setPasswordSet] = useState(false)
    const [passwordValue, setPasswordValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    //event handling
    const handleKeyEvent = (event) => {
        if(event.key === 'Enter') {
            handleRegistration()
        }
    }

    //check email input
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase())
    }

    //detect input
    const handleNameChange = (event) => {
        setNameValue(event.target.value)
        setNameSet(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
        setEmailSet(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value)
        setPasswordSet(event.target.value)
        setErrorMessage('')
    }

    //handle registration

    const handleRegistration = () => {
        
    }



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
                <form className="signup_form" onKeyUp={handleKeyEvent}>
                    <InputField placeholder="name" onChange={handleNameChange}/>
                    <InputField placeholder="e-mail" onChange={handleEmailChange}/>
                    <PasswordInputField placeholder="password" onChange={handlePasswordChange}/>
                    <SignUpButton placeholder="SIGN UP" onClick={handleRegistration}/>
                    <input type="button" className="signup_button andantetext-bold-white-48px" value="SIGN UP" />
                </form>

                <div className="sign-up_msg">
                    <p> <span className="andantetext-regular-black-20px">Already have an account? </span><span className="andantetext-bold-blue-20px">Log In</span> </p>
                </div>
                
            </div>
        </div>
    );
}

function InputField({placeholder, onChange}) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
        onChange(event)
    }

    return(
        <input
            className="signup_input andantetext-regular-black-32px"
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

function PasswordInputField({placeholder, onChange}) {

    const [displayValue, setDisplayValue] = useState('')
    const handleChange = (event) => {
        setDisplayValue(event.target.value)
        onChange(event)
    }

    return(
        <input
            className="signup_input andantetext-regular-black-32px"
            type="password"
            value={displayValue}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}


function SignUpButton({placeholder, onClick}) {
    return(
        <input
            className="signup_button andantetext-bold-white-48px"
            type="button"
            onClick={onClick}
            value={placeholder}
        />
    )
}