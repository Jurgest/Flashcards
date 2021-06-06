import React from 'react'
import {useState} from 'react'
import { AddQuestion } from './components/AddQuestion';
import Header from "./components/Header";
import { Questions } from './components/Questions';

const App = () => {
  const [showAddQuestion, setShowAddQuestion] = useState (false)
  const [selectedItem, setSelectedItem] = useState({})
  console.log(selectedItem);
  const [questions, setQuestions] = useState ([
    {
        id:1,
        question: 'what are javaScript events?',
        answer:'object types',
        active: true,
        visible:true
    },
    {
        id:2,
        question: 'what are javaScript events?',
        answer:'object types',
        active: true,
        visible:true
    },
    
])

console.log(questions);

// add question
const addQuestion = (question) => {
  const id = Math.floor(Math.random()* 10000) + 1
  const newQuestion = {id,...question}
  setQuestions ([...questions, newQuestion])

}

const edit = (newArr) => {
console.log("🚀 ~ file: App.js ~ line 40 ~ edit ~ newArr", newArr)
  setQuestions(newArr)
}

// delete question

const deleteQuestion = (id) => {
  setQuestions(questions.filter((question) => question.id !==id ))

}
// active question
const activeQuestion = (id) => {
  setQuestions (questions.map((question) =>question.id === id ? {...question, active: !question.active} : question ))
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
        isActive={activeQuestion} 
      />
      ) : ('no questions to show')}
      </div>
   
    </div>
  );
}


export default App;
