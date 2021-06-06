import React from 'react'
import {useState} from 'react'
import { AddQuestion } from './components/AddQuestion';
import Header from "./components/Header";
import { Questions } from './components/Questions';


const App = () => {
  const [showAddQuestion, setShowAddQuestion] = useState (false) //shfaq ose jo formen
  const [selectedItem, setSelectedItem] = useState({})
  const [questions, setQuestions] = useState ([ //te dhenat fillestare
    {
        id:1,
        question: 'wWhat is a constructor in Javascript?',
        answer:"I don't know",
        visible:true
    },
    {
        id:2,
        question: 'What are four ways do create object in JavaScript?',
        answer:"prap I don't know",
        visible:true
    },
    
])


// add question
const addQuestion = (question) => {
  const id = Math.floor(Math.random()* 10000) + 1
  const newQuestion = {id,...question}
  setQuestions ([...questions, newQuestion])

}
// te dhenat kur editojme
const edit = (newArr) => {
  setQuestions(newArr)
}

// delete question iksi dhe butoni delete

const deleteQuestion = (id) => {
  setQuestions(questions.filter((question) => question.id !==id ))

}


  return (
    <div className="container-question">
      <div className='container'>
    <Header onAdd = {()=> setShowAddQuestion(!showAddQuestion)} showAdd={showAddQuestion} />
     {showAddQuestion && <AddQuestion setSelectedItem={setSelectedItem} onAdd={addQuestion} edit={edit} selectedItem={selectedItem} questions={questions}/>}
      </div>
     
     <div className='question-space'> 
      {questions.length > 0 ? ( 
      <Questions 
      setShowAddQuestion={setShowAddQuestion}
        setSelectedItem={setSelectedItem}
        questions={questions} 
        onDelete={deleteQuestion}
      />
      ) : ('no questions to show')}
      </div>
   
    </div>
  );
}


export default App;
