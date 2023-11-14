import React from "react";
import Header from "../../components/header";
import '../../assets/css files/contact.css'
import Footer from '../../components/footer.jsx'
import '../../assets/css files/global.css'


export default function Contact() {
    return (
        <>
            <Header />

            <div className="contact_container col-12">
                <div className="contact-header_container andantedisplay-bold-black-80px">
                    Contact Us
                </div>
                <div className="contact-text_container andantetext-regular-black-40px">
                    PennyPlanner <br/><br/> Erzbergerstraße 121, 76133 Karlsruhe <br/><br/> Mail: contact@penny-planner.eu
                </div>
            </div>

            <Footer />
        </>
    );
}