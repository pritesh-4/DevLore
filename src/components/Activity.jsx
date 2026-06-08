import React, { useEffect, useState } from 'react'

const Activity = () => {

  const [history, setHistory] = useState([]);

  useEffect(() => {
  const quizData =
    JSON.parse(localStorage.getItem("quizHistory")) || [];

   setHistory(quizData);
  }, []);

  const recentHistory = history.slice(-5).reverse();

  return (
    <div className="activity">
  <h2>Recent Activity</h2>

  {
    recentHistory.length === 0 ? (

      <p>No quizzes completed yet.</p>

    ) : (

      recentHistory.map((quiz, index) => (
        <div className="activity-card" key={index}>
          <div>
            <h3>{quiz.category}</h3>
            <p>{quiz.difficulty}</p>
          </div>

          <span>
            {quiz.score}/{quiz.totalquestion}
          </span>
        </div>
      ))

    )
  }

</div>
  )
}

export default Activity