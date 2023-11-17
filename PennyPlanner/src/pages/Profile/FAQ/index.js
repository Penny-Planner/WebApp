import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import '../../../assets/css files/profile.css'
import Sidebar from '../../../components/sidebar'
import FAQ_Question from '../../../components/faq-question'

export default function ProfileFAQ() {
    return (
        <>
            <div className="user-faq_container">
                <div className="user-faq-header_container andantedisplay-bold-black-64px">
                    Frequently Asked Questions
                </div>
                <FAQ_Question question="When was PennyPlanner created?" answertext="2023." />
                <FAQ_Question question="Why was PennyPlanner created?" answertext="PennyPlanner was an idea for a student research project." />
                <FAQ_Question question="What Technologies do you use?" answertext="We use React, NGINX and Kubernetes." />
                <FAQ_Question question="What is DHBW?" answertext="DHBW is German and stands for Baden-Wuerttemberg Cooperative State University." />
                <FAQ_Question question="How can I contact you? " answertext="You can contact via mail: contact@penny-planner.eu." />
                <div className="faq-placeholder-div col-12"> </div>
            </div>
            <Sidebar />
        </>
    )
}