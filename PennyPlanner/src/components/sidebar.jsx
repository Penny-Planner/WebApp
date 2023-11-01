import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css files/sidebar.css"
import PennyPlannerLogo from '../assets/images/PennyPlannerLogo.png'


export default function Sidebar() {
    return (
        <div className="sidebar_frame">
            <div className="logo_container">
                <img src={PennyPlannerLogo} alt="PennyPlanner Logo" className="pennyplanner_logo" />
            </div>
            <Sidebar_option_border link="" label="Profile Information" />
            <Sidebar_option link="" label="Notifications" />
            <Sidebar_option link="" label="Goals" />
            <Sidebar_option link="" label="Connected Apps" />
            <Sidebar_option link="" label="Categories" />
            <Sidebar_option link="" label="Add Bank Account" />
            <Sidebar_option link="" label="Configure Profile" />
            <Sidebar_option link="" label="FAQ" />
            <Sidebar_option link="" label="Settings" />
            <Sidebar_option_border link="" label="Log Out" />

        </div>
    )
}

function Sidebar_option_border({ link, label }) {
    return (
        <>
            <Link to={link} className="option_container_border andantetext-regular-black-28px">
                {label}
            </Link>
        </>
    )
}

function Sidebar_option({ link, label }) {
    return (
        <>
            <Link to={link} className="option_container andantetext-regular-black-28px">
                {label}
            </Link>
        </>
    )
}