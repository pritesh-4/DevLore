import React from 'react'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='hero'>
        <h1>Master Knowledge And Skills Through Interactive Quizzes</h1>

        <p>
         Track progress, discover weaknesses, and improve your
        technical knowledge one quiz at a time.
        </p>

        <button onClick={()=> navigate("/quizsetup")}>Start Quiz</button>
    </div>
  )
}

export default Hero