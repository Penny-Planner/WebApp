import React, { useState } from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import '../../../assets/css files/profile.css'
import Sidebar from '../../../components/sidebar'

export default function ProfileInfo() {
    return (
        <>
            <div className="content_background">
                <div className="profile_circle_background">
                </div>
                <div className="upper_content">
                    <div className="profile-picture_container">
                        <div className="profile-pic">

                        </div>

                    </div>
                    <div className="username_container">
                        <div className="username_box">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="lower_content">
                    <div className="content_container">

                        <div className="user-information_column_container">

                            <UserInfoRow category="Name" type="text" variable="John Doe" />
                            <UserInfoRow category="E-Mail" type="text" variable="johndoe@gmail.com" />
                            <UserInfoRow category="Phone" type="text" variable="+44 1632 960817" />
                            <UserInfoRow category="Password" type="password" variable="password" />

                            <div className="user-buttons_container">
                                <button className="user-info-button andantetext-regular-white-28px">
                                    Pause Profile
                                </button>
                                <button className="user-info-button andantetext-regular-white-28px">
                                    Delete Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </>
    )
}

function UserInfoRow({ category, type, variable }) {
    const [buttonText, setButtonText] = useState('CHANGE');
    const [buttonColor, setButtonColor] = useState('red');
    const [editable, setEditable] = useState(false);
    const [inputValue, setInputValue] = useState(variable);


    const handleClick = () => {
        if (buttonText === 'CHANGE') {
            setButtonText('SEND');
            setButtonColor('green');
        } else {
            setButtonText('CHANGE');
            setButtonColor('red')
        }
        setEditable(!editable);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="user-information_row_container">
            <div className="outer-user-information_row_container andantetext-regular-black-28px">
                {category}
            </div>
            {editable ? (
                <input
                    type={type}
                    className="inner-user-information_row_container andantetext-regular-black-28px"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            ) : (
                <input
                    type={type}
                    className="inner-user-information_row_container andantetext-regular-black-28px readonly-input"
                    value={inputValue}
                    readOnly
                />
            )}
            <button onClick={handleClick} className="outer-user-information_row_container andantetext-regular-black-28px" style={{ borderColor: buttonColor }}>
                {buttonText}
            </button>
        </div>
    )
}