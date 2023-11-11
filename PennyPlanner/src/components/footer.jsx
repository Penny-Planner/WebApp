import React from "react";
import {Link, useNavigate } from 'react-router-dom'
import '../assets/css files/footer.css'
import PennyPlannerLogo from '../assets/images/PennyPlannerLogo.png'
import '../assets/css files/global.css'


export default function Footer() {
    return (
        <div className="footer_container">
            <div className="upper-footer_container">
                <div className="footer-logo-text_container">
                    <div className="footer-logo_container col-3">
                        <img src={PennyPlannerLogo} alt="PennyPlanner Logo" className="footer-logo" />
                    </div>
                    <div className="footer-title_container andantedisplay-bold-black-80px col-9">
                        PENNY <br /> PLANNER
                    </div>
                </div>
                <div className="footer-help-legal-socials_container">
                    <div className="footer-help_container col-3">
                        <div className="footer-col_container">
                            <div className="footer-col-row_container andantetext-bold-blue-30px">
                                Help
                            </div>
                            <Link to="/faq" className="footer-col-row_container andantetext-regular-black-30px">
                                FAQ
                            </Link>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Contact
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                About Us
                            </div>
                        </div>
                    </div>
                    <div className="footer-legal_container col-5">
                        <div className="footer-col_container">
                            <div className="footer-col-row_container andantetext-bold-blue-30px">
                                Legal Info
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Privacy Policy
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Terms & Conditions
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Cookie Policy
                            </div>
                        </div>
                    </div>
                    <div className="footer-socials_container col-4">
                        <div className="footer-col_container">
                            <div className="footer-col-row_container andantetext-bold-blue-30px">
                                Socials
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Twitter
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Instagram
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Facebook
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer_container">
                <div className="footer-copyright_container">
                    <div className="footer-copyright-text andantetext-regular-black-20px">
                        (c) 2023 PennyPlanner - All Rights Reserved
                    </div>

                </div>
            </div>
        </div>
    )
}