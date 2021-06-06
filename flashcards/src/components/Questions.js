import { Question } from "./Question"


export const Questions = ({questions, onDelete, isActive, setSelectedItem, setShowAddQuestion}) => {
    
    return (
        <>
            {questions.map((question) => (
            <Question  
                key ={question.id} 
                question={question} 
                onDelete={onDelete} 
                isActive={isActive}  
                setSelectedItem={setSelectedItem}
                setShowAddQuestion={setShowAddQuestion}
            />
            ))}
        </>
    )
}
