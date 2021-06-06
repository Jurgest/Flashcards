import React, {useState, useEffect } from 'react'

export const AddQuestion = ({onAdd, edit, selectedItem, questions, setSelectedItem}) => {

    useEffect(() => {
        setQuestion(selectedItem.question)
        setAnswer(selectedItem.answer)
    }, [selectedItem])

    const [question, setQuestion] = useState ('')
    const [answer, setAnswer] = useState ('')

    const onSubmit  = (e) => {
        e.preventDefault() 
        if (!question) {
            alert ('please add a question')
            return
        }
        if (selectedItem && selectedItem.id) {
            
            const editedItem = questions.filter(item => item.id === selectedItem.id)
            editedItem.question = question
            editedItem.answer = answer
            edit([...questions.filter(item => item.id !== selectedItem.id), editedItem])
        } else {
            onAdd ({question, answer})
        }
        setQuestion('')
        setAnswer('')
        setSelectedItem({})
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Question</label>
                <textarea type='textarea' placeholder='Add Question' value={question} onChange={(e) => setQuestion(e.target.value) } />
            </div>
            <div className='form-control'>
                <label>Answer</label>
                <textarea type='textarea' placeholder='Add Answer'  value={answer} onChange={(e) => setAnswer(e.target.value) }/>
            </div>
           <input className='btn btn-block' type='submit' value='save'></input>
            
        </form>
    )
}
