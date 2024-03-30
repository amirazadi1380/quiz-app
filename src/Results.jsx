import React from 'react'
import { useSelector } from 'react-redux'

export default function Results() {
    const quiz = useSelector(store=>store.quiz)
  return (
    <div>
        <h1>hi {quiz.username} your result is here</h1>
        <h1>yout totall score is {quiz.score}/{quiz.questionsIndex}</h1>
        {quiz.score / quiz.questionsIndex >= 0.5 ? <h2>good job...</h2> : <h2>not good...</h2>}
    </div>
  )
}
