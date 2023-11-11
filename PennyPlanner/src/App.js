import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profileview from './pages/Profile';
import FAQ from './pages/FAQ';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profileview />} />

                <Route path='/faq' element={<FAQ />} />


            </Routes>
        </>
    )
}

export default App;