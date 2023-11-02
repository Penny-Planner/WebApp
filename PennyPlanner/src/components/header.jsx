import React from "react";
import "../assets/css files/header.css"
import {Link, useNavigate} from 'react-router-dom'

export default function Header() {
    return (
        <div className="header_background">
            <div className="pennyplanner_title andantedisplay-bold-black-40px">
                PennyPlanner
            </div>
            <div className="header-nav_container">
                <Link to="" className="header-link_container andantetext-regular-black-40px">
                    About Us
                </Link>
                <Link to="/signup" className="header-link_container andantetext-regular-black-40px">
                    Sign Up
                </Link>
                <Link to="login" className="header-link_container andantetext-regular-black-40px">
                    Log In
                </Link>
            </div>
        </div>
    );
}