import { useState } from 'react'

import Question from './Question'

const Quiz = ({ quiz, icon }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [end, setEnd] = useState(false)

  const incrementScore = () => {
    setScore(score + 1)
    console.log(score + 1)
  }
  console.log(quiz)
  const setNextQuestion = () => {
    if (currentQuestion >= quiz.questions.length - 1) {
      setEnd(true)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  if (end) {
    return (
      <div className='quiz-end'>
        <h2>
          Quiz Completed! <span>You scored...</span>
        </h2>
        <div className='score-details'>
          <div className='score-card'>
            <div className='score-title'>
              <div
                className={`header-icon-container header-icon-${quiz.title.toLowerCase()}`}
              >
                <img src={icon} className='quiz-icon' alt='Quiz Icon' />
              </div>
              <h3 className='quiz-title'>{quiz.title}</h3>
            </div>
            <div className='score'>
              <div className='score-value'>{score}</div>
              <div className='score-total'>out of {quiz.questions.length}</div>
            </div>
          </div>
          <button
            className='play-again-button'
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='quiz'>
        {quiz.questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            currentQuestion={currentQuestion}
            setNextQuestion={setNextQuestion}
            id={index}
            maxQuestions={quiz.questions.length}
            incrementScore={incrementScore}
          />
        ))}
      </div>
    )
  }
}

export default Quiz
