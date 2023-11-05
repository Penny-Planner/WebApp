import React from "react";
import Header from "../../components/header";
import '../../assets/css files/home.css'
import Footer from '../../components/footer.jsx'
import '../../assets/css files/global.css'


export default function Home() {
    return(
        <>
            <Header/>
            <div className="home-main-slogan_container">
                <div className="home-slogan-1_container andantetext-regular-black-40px col-12">
                    Manage all your expenses
                </div>
                <div className="home-slogan-2_container andantedisplay-bold-black-100px col-12">
                    See all your finances <br/> at a glance
                </div>
            </div>
            <div className="much">

            </div>
            <Footer />
        </>
    );
}