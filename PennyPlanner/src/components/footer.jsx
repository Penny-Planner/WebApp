import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css files/footer.css'
import PennyPlannerLogo from '../assets/images/PennyPlannerLogo.png'
import '../assets/css files/global.css'

//import PDF files
import AGB from '../assets/pdf_files/AGBs_eng.pdf'
import Legal_Notice from '../assets/pdf_files/Legal Notice_eng.pdf'
import Privacy_Policy from '../assets/pdf_files/Privacy Policy_eng.pdf'


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
                            <Link to="/aboutus" className="footer-col-row_container andantetext-regular-black-30px">
                                About Us
                            </Link>
                        </div>
                    </div>
                    <div className="footer-legal_container col-5">
                        <div className="footer-col_container">
                            <div className="footer-col-row_container andantetext-bold-blue-30px">
                                Legal Info
                            </div>
                            <a href={Privacy_Policy} without rel="noreferrer" target="_blank" className="footer-col-row_container andantetext-regular-black-30px">
                                Privacy Policy
                            </a>
                            <a href={AGB} without rel="noreferrer" target="_blank" className="footer-col-row_container andantetext-regular-black-30px">
                                Terms & Conditions
                            </a>
                            <a href={Legal_Notice} without rel="noreferrer" target="_blank" className="footer-col-row_container andantetext-regular-black-30px">
                                Legal Notice
                            </a>
                        </div>
                    </div>
                    <div className="footer-socials_container col-4">
                        <div className="footer-col_container">
                            <div className="footer-col-row_container andantetext-bold-blue-30px">
                                Socials
                            </div>
                            <a href="https://twitter.com/pennyplannereu" target="_blank" className="footer-col-row_container andantetext-regular-black-30px">
                                Twitter
                            </a>
                            <div className="footer-col-row_container andantetext-regular-black-30px">
                                Instagram
                            </div>
                            <a href="https://www.linkedin.com/in/penny-planner" target="_blank"className="footer-col-row_container andantetext-regular-black-30px">
                                LinkedIn
                            </a>
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