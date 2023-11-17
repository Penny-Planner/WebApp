import React from 'react'
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

                            <UserInfoRow category="Name" variable="Deine Mum" />
                            <UserInfoRow category="E-Mail" variable="Deine Mum" />
                            <UserInfoRow category="Phone" variable="Deine Mum" />
                            <UserInfoRow category="Password" variable="Deine Mum" />

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

function UserInfoRow({ category, variable }) {
    return (
        <div className="user-information_row_container">
            <div className="outer-user-information_row_container andantetext-regular-black-28px">
                {category}
            </div>
            <div className="inner-user-information_row_container andantetext-regular-black-28px">
                {variable}
            </div>
            <div className="outer-user-information_row_container andantetext-regular-black-28px">
                CHANGE
            </div>
        </div>
    )
}