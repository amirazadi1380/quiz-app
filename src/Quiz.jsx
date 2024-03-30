import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { questions } from './Questions'
import { addIndexAction, addScoreAction } from './quizSlice';
export default function Quiz() {
  const quiz = useSelector(store => store.quiz)
  const dispatch = useDispatch();
  return (
    <div>
      {!quiz.finished
      &&
      <div>
        <h1>hi {quiz.username}</h1>
        <p>your score is : {quiz.score}</p>
        <p>question : {quiz.questionsIndex + 1}</p>
        <div>
          <p> {questions[quiz.questionsIndex].question} </p>
          <div>{questions[quiz.questionsIndex].answers.map((item, index) => <button onClick={() => {
            if (questions[quiz.questionsIndex].correctIndex == index) {
              dispatch(addScoreAction())
            }
            dispatch(addIndexAction())
          }} key={index}>{item}</button>)}</div>

        </div>

      </div>
    }
    </div>
  )
}
