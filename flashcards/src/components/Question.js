import React, {useState, useEffect } from 'react'
import {FaTimes} from 'react-icons/fa'
import { Button } from "./Button"

export const Question = ({question, onDelete, setSelectedItem, setShowAddQuestion}) => {
    const [showAnswers, setShowAnswers] = useState(false)
    const onClick = () => setShowAnswers(!showAnswers)

    const Answers = () => (
        <div id="Answers" className="answers">
          {question.answer}
        </div>
    )

    return (
        <div className= 'question ' >
            <h3>{
            question.question} 
            <FaTimes style ={
                {color:'red', cursor:'pointer'}}  
                onClick = { () => onDelete(question.id)}/></h3>
            <a onClick={onClick} >show/hide Answer</a>
            <div>
                 <a onClick={onClick} />
                  { showAnswers ? <Answers /> : null }
            </div>
            <div> <Button 
            onClick = {() => {
                setSelectedItem(question);
                setShowAddQuestion(true);
            }}
            color='green' 
            text='EDIT' />
            <Button 
            onClick = { () => onDelete(question.id)}
            color='rgb(255, 119, 119)' 
            text='DELETE' />
            </div>
            
        </div>
    )
}
