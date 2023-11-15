import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import '../../../assets/css files/profile.css'
import Sidebar from '../../../components/sidebar'

export default function Goals() {
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

                    </div>
                </div>
            </div>
            <Sidebar />
        </>
    )
}