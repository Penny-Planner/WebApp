import React, { useState } from "react";
import '../assets/css files/faq-question.css'
import ExpandIcon from '../assets/images/expand-icon.svg'
import CloseIcon from '../assets/images/close-icon.svg'
import '../assets/css files/global.css'

export default function FAQ_Question({ question, answertext }) {

    const [showQuestion, setShowQuestion] = useState(true)
    const [showAnswer, setShowAnswer] = useState(false)

    function handleClick() {

        if (showQuestion) {
            setShowQuestion(false);
            setShowAnswer(true);
        } else {
            setShowAnswer(false)
            setShowQuestion(true)
        }
    }

    return (
        <>
            {
                showQuestion ?
                    <button className="faq-question_container col-9" onClick={handleClick}>
                        <div className="question_container andantedisplay-bold-black-40px">
                            {question}
                        </div>
                        <div className="expand-icon_container">
                            <img src={ExpandIcon} alt="expand icon" className="expand-icon" />
                        </div>
                    </button>
                    : null
            }

            {
                showAnswer ?
                    <button className="faq-answer_container col-9" onClick={handleClick}>
                        <div className="upper-faq-answer_container">
                            <div className="question2_container andantedisplay-bold-black-40px">
                                {question}
                            </div>
                            <div className="expand-icon_container">
                                <img src={CloseIcon} alt="expand icon" className="expand-icon" />
                            </div>
                        </div>
                        <div className="lower-faq-answer_container">
                            <div className="answer_container andantetext-regular-black-40px">
                                {answertext}
                            </div>
                        </div>
                    </button>
                    : null
            }
        </>
    )
}

