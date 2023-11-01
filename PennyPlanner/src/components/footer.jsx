import React from "react";
//import {Link, useNavigate } from 'react-router-dom'
import '../assets/css files/footer.css'
import PennyPlannerLogo from '../assets/images/PennyPlannerLogo.png'


export default function Footer() {
    return (
        <div className="footer_container">
            <div className="upper-footer_container">
                <div className="footer-logo-text_container">
                    <div className="footer-logo_container">
                        <img src={PennyPlannerLogo} alt="PennyPlanner Logo" className="footer-logo" />
                    </div>
                    <div className="footer-title_container andantedisplay-bold-black-80px">
                        PENNY <br /> PLANNER
                    </div>
                </div>
                <div className="footer-help-legal-socials_container">
                    <div className="footer-help_container">
                        <div className="footer-col_container">
                            <div className="footer-col-row_container andantetext-bold-blue-30px">
                                Help
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                FAQ
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Contact
                            </div>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                About Us
                            </div>
                        </div>
                    </div>
                    <div className="footer-legal_container">
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
                    <div className="footer-socials_container">
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