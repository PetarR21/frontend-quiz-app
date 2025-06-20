import { useState } from 'react'

import ErrorIcon from '../assets/images/icon-error.svg'

import Option from './Option'

const Question = ({
  question,
  currentQuestion,
  setNextQuestion,
  id,
  maxQuestions,
  incrementScore,
}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [error, setError] = useState('')
  const [correct, setCorrect] = useState(null)

  if (id !== currentQuestion) {
    return null
  }

  const onCorrect = () => {
    setCorrect(selectedOption)
    incrementScore()
  }

  const validateAnswer = () => {
    if (selectedOption === null) {
      setError('Please select an answer')
    } else {
      setError('')
      question.answer === question.options[selectedOption]
        ? onCorrect()
        : setCorrect(question.options.indexOf(question.answer))
    }
  }

  const calculateProgress = () => {
    const progress = ((id + 1) / maxQuestions) * 100
    return progress
  }

  return (
    <div className='question'>
      <div className='question-details'>
        <p className='question-number'>
          Question {id + 1} of {maxQuestions}
        </p>
        <p className='question-text'>{question.question}</p>

        <div className='progress-bar'>
          <span style={{ width: `${calculateProgress()}%` }}></span>
        </div>
      </div>
      <div className='question-form'>
        <div className='question-options'>
          {question.options.map((option, index) => (
            <Option
              key={index}
              option={option}
              id={index}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              correct={correct}
            />
          ))}
        </div>
        {correct !== null ? (
          <button className='question-button' onClick={setNextQuestion}>
            Next Question
          </button>
        ) : (
          <button onClick={validateAnswer} className='question-button'>
            Submit Answer
          </button>
        )}

        {error && (
          <div className='options-error'>
            <img src={ErrorIcon} alt='' />
            <p className='error-text'>{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Question
