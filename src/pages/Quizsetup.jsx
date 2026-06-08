import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Quizsetup = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("Video Games");
    const [difficulty, setdifficulty] = useState("Easy");
    const [amount, setamount] = useState(5);

  return (
    <div className='qsetup'>
        <h2>Quiz Setup</h2>

        <label>Category</label>
        <select value={category} onChange={(ele) => setcategory(ele.target.value)}>
            <option>Video Games</option>
            <option>Science</option>
            <option>Geography</option>
            <option>History</option>
            <option>Sports</option>
        </select>

         <label>Difficulty</label>
        <select value={difficulty} onChange={(ele) => setdifficulty(ele.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>


         <label>Questions</label>
        <select value={amount}  onChange={(ele) => setamount(Number(ele.target.value))}>
            <option value={5}>5 Questions</option>
            <option value={10}>10 Questions</option>
            <option value={25}>25 Questions</option>
        </select>

        <button onClick={
            () => {navigate("/quiz",{
                state: {
                    category,difficulty,amount
                },
               })
            }}>Begin Quiz</button>
    </div>

  )
}

export default Quizsetup