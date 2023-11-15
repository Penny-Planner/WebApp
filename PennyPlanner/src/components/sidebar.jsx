import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css files/sidebar.css";
import PennyPlannerLogo from '../assets/images/PennyPlannerLogo.png';

export default function Sidebar() {
    const [selectedOption, setSelectedOption] = useState("/user/profile");
    const location = useLocation();

    useEffect(() => {
        setSelectedOption(location.pathname);
    }, [location.pathname]);

    function Sidebar_option({ link, label }) {
        return (
            <Link
                to={link}
                className={link === selectedOption ? "selected-option_container andantetext-regular-black-28px" : "option_container andantetext-regular-black-28px"}
                onClick={() => setSelectedOption(link)}
            >
                {label}
            </Link>
        );
    }

    function Sidebar_option_border({ link, label }) {
        return (
            <Link
                to={link}
                className={link === selectedOption ? "selected-option_container_border andantetext-regular-black-28px" : "option_container_border andantetext-regular-black-28px"}
                onClick={() => setSelectedOption(link)}
            >
                {label}
            </Link>
        );
    }

    return (
        <div className="sidebar_frame col-3">
            <div className="logo_container">
                <img src={PennyPlannerLogo} alt="PennyPlanner Logo" className="pennyplanner_logo" />
            </div>
            <Sidebar_option_border link="/user/profile" label="Profile Information" />
            <Sidebar_option link="/user/notifications" label="Notifications" />
            <Sidebar_option link="/user/goals" label="Goals" />
            <Sidebar_option link="/user/apps" label="Connected Apps" />
            <Sidebar_option link="/user/categories" label="Categories" />
            <Sidebar_option link="/user/addbank" label="Add Bank Account" />
            <Sidebar_option link="/user/configuration" label="Configure Profile" />
            <Sidebar_option link="/user/faq" label="FAQ" />
            <Sidebar_option link="/user/settings" label="Settings" />
            <Sidebar_option_border link="/" label="Log Out" />
        </div>
    );
}