import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

//Profile Components
import ProfileInfo from './pages/Profile/ProfileInfo';
import Notifications from './pages/Profile/Notifications';
import Goals from './pages/Profile/Goals';
import AddedApps from './pages/Profile/Apps';
import Categories from './pages/Profile/Categories';
import AddBankAccount from './pages/Profile/BankAccount';
import Configuration from './pages/Profile/Configuration';
import ProfileFAQ from './pages/Profile/FAQ';
import Settings from './pages/Profile/Settings';

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='user/:section' element={<UserComponent />} />


                <Route path='aboutus' element={<AboutUs />} />
                <Route path='contact' element={<Contact />} />
                <Route path='faq' element={<FAQ />} />


            </Routes>
        </>
    )
}

const UserComponent = () => {
    let { section } = useParams();

    switch (section) {
        case 'profile':
            return <ProfileInfo />;
        case 'notifications':
            return <Notifications />;
        case 'goals':
            return <Goals />;
        case 'apps':
            return <AddedApps />;
        case 'categories':
            return <Categories />;
        case 'addbank':
            return <AddBankAccount />;
        case 'configuration':
            return <Configuration />;
        case 'faq':
            return <ProfileFAQ />;
        case 'settings':
            return <Settings />;
        default:
            return <div>404 - Page Not Found</div>
    }
}

export default App;