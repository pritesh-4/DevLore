import React, { useEffect, useState } from 'react'
import Statcard from "../components/Statcard"

const Dashboard = () => {

 const [History, setHistory] = useState([]);
  
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("quizHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const totalScore = History.reduce(
  (sum, quiz) => sum + quiz.score,
  0
 );

 const totalAccuracy = History.reduce(
  (sum, quiz) => sum + quiz.accuracy,
  0
 );

 const bestScore = Math.max(
  ...History.map(quiz => quiz.score)
 );

 const avgscore = totalScore/history.length;
const avgaccuracy =History.length > 0? (totalAccuracy / History.length).toFixed(1): 0;

 const recentHistory = History.slice(-5);

  
  return (
    <div className='dash'>
        <h1>Dashboard</h1>

        <Statcard title="Total Quizes" value={History.length}/>
        <Statcard title="Average Score" value={avgscore}/>
        <Statcard title="Best score" value={bestScore}/>
        <Statcard title="Average Accuracy" value={avgaccuracy}/>

        <div className='recent'>
            <h3>Recent Activity</h3>

            { recentHistory.length === 0 ? (

           <div className="emptys">
            <h3>No quizzes completed yet</h3>
            <p>Take your first quiz to see activity here.</p>
            </div>

              ) : (
              recentHistory.map((quiz, index) => (
               <p key={index}>
              {quiz.category}: {quiz.score}/{quiz.totalquestion}
              </p>
               )))
            }
        </div>

        <div className='bar'>
            <h2>Performance Bar</h2>

            <h3>Average Accuracy</h3>
            <div className="perform">
                 <div className="fill" style={{width: `${avgaccuracy}%`}}></div>
              </div>
             <p>{avgaccuracy}</p>
        </div>
{/* 
             <h3>Git</h3>
            <div className="perform">
                 <div className="fill"></div>
              </div>
             <p>40%</p>

             <h3>CSS</h3>
            <div className="perform">
                 <div className="fill"></div>
              </div>
             <p>100%</p> */}
        
        
    </div>
  )
}

export default Dashboard