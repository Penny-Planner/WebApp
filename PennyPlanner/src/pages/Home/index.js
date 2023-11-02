import React from "react";
import Header from "../../components/header";
import '../../assets/css files/home.css'
import Footer from '../../components/footer.jsx'


export default function Home() {
    return(
        <div className="fullscreen-home">
            <Header/>
            <div className="home-main-slogan_container">
                <div className="home-slogan-1_container andantetext-regular-black-40px">
                    Manage all your expenses
                </div>
                <div className="home-slogan-2_container andantedisplay-bold-black-100px">
                    See all your finances <br/> at a glance
                </div>
            </div>
            <div className="much">

            </div>
            <Footer />
        </div>
    );
}