import React from "react";
import Header from "../../components/header";
import '../../assets/css files/aboutus.css'
import Footer from '../../components/footer.jsx'
import '../../assets/css files/global.css'
import { Link } from "react-router-dom";


export default function AboutUs() {
    return (
        <>
            <Header />

            <div className="about-us_container col-12">
                <div className="about-us-header_container andantedisplay-bold-black-80px">
                    About PennyPlanner
                </div>

                <div className="au-text_container andantetext-regular-black-40px col-9">
                    Welcome to PennyPlanner – Your Personal Finance Companion! <br /><br />

                    At PennyPlanner, we understand the importance of managing your finances effectively, and that's why we're here to empower you on your journey to financial well-being. <br />
                    PennyPlanner is more than just a financial tool; it's your partner in achieving financial success.
                </div>

                <div className="au_container col-9">
                    <div className="au-header_container andantedisplay-bold-black-48px">
                        Our Mission
                    </div>
                    <div className="au-text_container andantetext-regular-black-40px">
                        <br />PennyPlanner is committed to providing a user-friendly and comprehensive platform that enables individuals to take control of their finances. We believe that financial empowerment leads to a more secure and fulfilling life.
                    </div>
                </div>

                <div className="au_container col-9">
                    <div className="au-header_container andantedisplay-bold-black-48px">
                        What Sets Us Apart
                    </div>
                    <div className="au-text_container andantetext-regular-black-40px">
                        <br />PennyPlanner goes beyond the numbers. We combine intuitive design with powerful financial tools to offer you a seamless experience. From budgeting and expense tracking to goal setting and financial insights, PennyPlanner is designed to simplify your financial life.
                    </div>
                </div>

                <div className="au_container col-9">
                    <div className="au-header_container andantedisplay-bold-black-48px">
                        Why PennyPlanner
                    </div>
                    <div className="au-text_container andantetext-regular-black-40px">
                        <br />
                        <ul>
                            <li className="andantedisplay-bold-black-40px">
                                User-Centric Design
                            </li>

                            <p className="andantetext-regular-black-40px">We prioritize user experience, making financial management accessible to everyone.</p> 

                            <li className="andantedisplay-bold-black-40px">
                                Comprehensive Features
                            </li>

                            <p className="andantetext-regular-black-40px">PennyPlanner covers all aspects of personal finance, ensuring you have the tools you need in one place.</p>

                            <li className="andantedisplay-bold-black-40px">
                                Data Security
                            </li>

                            <p className="andantetext-regular-black-40px">Your financial data is treated with the utmost security and privacy. We employ industry-standard practices to protect your information.</p>
                        </ul>
                    </div>
                </div>

                <div className="au_container col-9">
                    <div className="au-header_container andantedisplay-bold-black-48px">
                        About The Creators
                    </div>
                    <div className="au-text_container andantetext-regular-black-40px">
                        <br />PennyPlanner is the result of a dedicated effort by Marc and Miko, two passionate developers and finance enthusiasts. <br />
                        This project is part of a comprehensive study that explores the intersection of technology and personal finance. <br />
                        As students, both saw the opportunity to create a tool that not only fulfills academic requirements but also addresses a real-world need.
                    </div>
                </div>

                <div className="au_container col-9">
                    <div className="au-header_container andantedisplay-bold-black-48px">
                        Get Started
                    </div>
                    <div className="au-text_container andantetext-regular-black-40px">
                        <br />Ready to take control of your financial journey? <br />
                        Join PennyPlanner today and embark on a path to financial success!
                    </div>
                </div>

                <Link to="/signup" className="au-signup-button andantedisplay-bold-black-40px col-12">
                    Sign Up Now!
                </Link>

            </div >

            <Footer />
        </>
    );
}