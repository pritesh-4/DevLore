import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0;
  const totalquestion = location.state?.totalquestion || 0;
  const difficulty = location.state?.difficulty || 0;
  const category = location.state?.category || 0;
  const time = location.state?.time || 0;
  const accuracy = Math.round(
  (score / totalquestion) * 100)

  const [saved, setsaved] = useState(false);

  const saveResult = () => {

  const quizResult = {
    category,
    difficulty,
    score,
    totalquestion,
    accuracy,
    time
  };

  const oldHistory =
    JSON.parse(
      localStorage.getItem("quizHistory")
    ) || [];

  oldHistory.push(quizResult);

  localStorage.setItem(
    "quizHistory",
    JSON.stringify(oldHistory)
  );
  setsaved(true);
}

  return (
    <div className='result'>
      <h1>Congratulations</h1>

      <h2>Quiz completed</h2>

      <h3>Final Score</h3>
      <p>{score}/{totalquestion}</p>

      <div>
        <p>Correct Answers: {score}</p>
        <p>Wrong Answers: {totalquestion-score}</p>
        <p>Accuracy: {accuracy}%</p>
      </div>

      <button onClick={saveResult} disabled={saved}>{saved ? "Saved" : "Save Result"}</button>
      <button onClick={() => navigate("/quizsetup")}>Try Again</button>



    </div>
  )
}

export default Result