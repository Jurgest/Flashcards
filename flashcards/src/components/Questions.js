import { Question } from "./Question"


export const Questions = ({questions, onDelete, setSelectedItem, setShowAddQuestion}) => {
    
    return (
        <>
            {questions.map((question) => (
            <Question  
                key ={question.id} 
                question={question} 
                onDelete={onDelete}   
                setSelectedItem={setSelectedItem}
                setShowAddQuestion={setShowAddQuestion}
            />
            ))}
        </>
    )
}
