import React from 'react'
import Signup from './Signup'
import { useSelector } from 'react-redux'
import Quiz from './Quiz';
import Results from './Results';

export default function Home() { 
  const quiz = useSelector(store=>store.quiz);

  return (
    <div>
      {quiz.signedIn  ? <Quiz/> : <Signup/>}
      {quiz.finished && <Results/>}
      </div>
  )
}
