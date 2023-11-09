import React from "react";
import "../assets/css files/header.css"
import {Link, useNavigate} from 'react-router-dom'
import '../assets/css files/global.css'

export default function Header() {
    return (
        <div className="header_background col-12">
            <div className="pennyplanner_title andantedisplay-bold-black-40px">
                PennyPlanner
            </div>
            <div className="header-nav_container col-4">
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