import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import he from "he";

const Quiz = () => {
  const location = useLocation();
  const category = location.state?.category || 0;
  const difficulty = location.state?.difficulty || 0;
  const amount = location.state?.amount || 0;
  const navigate = useNavigate();
  const [questions, setquestions] = useState([]);
  const apiDifficulty = difficulty.toLowerCase();

  const categoryMap = {
  "Video Games": 15,
  Science: 17,
  Geography: 22,
  History: 23,
  Sports: 21,
};

const [current, setcurrent] = useState(0);
const [answer,setanswer] = useState("");
const [score, setscore] = useState(0);
const categoryId = categoryMap[category];
const [option, setOption] = useState([]);
const [time, settime] = useState(0);
const [error, setError] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    settime(prev => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {

  axios
    .get(`https://opentdb.com/api.php?amount=${amount}&difficulty=${apiDifficulty}&category=${categoryId}`)
   .then((response)=>{
      if(response.data.response_code !== 0){
        setError(true);
        return;
     }

      setquestions(response.data.results);
     })

    .catch((error)=>{
      console.log(error);
      setError(true);
      });

}, []);

useEffect(() => {
  if (questions.length > 0) {

    const shuffled = [
      ...questions[current].incorrect_answers,
      questions[current].correct_answer
    ];

    shuffled.sort(() => Math.random() - 0.5);

    setOption(shuffled);
  }
}, [current, questions]);

if(error){
    return (
        <h2>
            Failed to load quiz. Please try again.
        </h2>
    );
}

if (questions.length === 0) {
  return <h2 className='loader'>Loading...</h2>;
}

  return (
    <div className='quiz'>
        <h2>Question {current+1}/{questions.length}</h2>
        <p>Time: {time}s</p>

        <h3>{he.decode(questions[current]?.question)}</h3>
        {
         option.map(
             (option, index) => (
                <button key={index} onClick={() => setanswer(option)} className={answer === option ?"selected" :""}>
                {he.decode(option)}
                </button>
              )
            )
        }
               
     {
       current < questions.length - 1 ? (
       <button
       className="btnnxt"
       onClick={() => {
        
        if(answer === questions[current].correct_answer){
          setscore(score+1);
        }

        setcurrent(current + 1);
        setanswer("");
       }}
       >
       Next
       </button>
       ) : (
       <button className="btnnxt" onClick={() =>{
         let finalscore = score;

         if(answer === questions[current].correct_answer){
           finalscore = score +1; }
          
          navigate("/result", {
             state: {
             score: finalscore,
             totalquestion: questions.length,
             category,
             difficulty,
             time}
             })
         }
        }>
       Finish
       </button>
       )
     }
        
  </div>
  )
}

export default Quiz