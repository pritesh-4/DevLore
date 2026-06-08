import React, { useEffect, useState } from 'react'
import Statcard from './Statcard'

const Statsection = () => {

  const [history, sethistory] = useState([]);

  useEffect(() => {
    const quizdata = JSON.parse(localStorage.getItem("quizHistory")) || [];
    sethistory(quizdata);
  }, []);

 const bestScore =history.length > 0? Math.max(...history.map(quiz => quiz.score)): 0;

 const totalTime = history.reduce(
  (sum, quiz) => sum + quiz.time,
  0
 );


  return (
    <div className='statsection'>
        <Statcard title="Total Quizes" value={history.length}/>
        <Statcard title="Highest Score" value={bestScore}/>
        <Statcard title="Total time" value={totalTime}s/>

    </div>
  )
}

export default Statsection