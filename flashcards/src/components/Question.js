import {FaTimes} from 'react-icons/fa'
import { Button } from "./Button"

export const Question = ({question, onDelete, isActive, setSelectedItem, setShowAddQuestion}) => {
    const onClick = () => {
        
    }
    return (
        <div className= {`question ${question.active ? 'active' : ''}`} >
            <h3>{question.question} <FaTimes style ={{color:'red', cursor:'pointer'}}/></h3>
            <a >show/hide Answer</a>
            <p id='answer'> {question.answer}</p>
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
