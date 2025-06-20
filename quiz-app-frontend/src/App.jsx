import { useEffect, useState } from 'react'

import quizService from './services/quizzes'

import Main from './components/Main'
import Quiz from './components/Quiz'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [quizess, setQuizzes] = useState([])
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [quizIcon, setQuizIcon] = useState(null)

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await quizService.getQuizzes()
        setQuizzes(data.quizzes)
      } catch (error) {
        console.error('Error fetching quizzes:', error)
      }
    }
    fetchQuizzes()
  }, [])

  useEffect(() => {
    if (selectedQuiz && selectedQuiz.icon) {
      setQuizIcon(selectedQuiz.icon)
    }
  }, [selectedQuiz])

  return (
    <div className={`theme-${theme} app`}>
      <div className='container'>
        <header className='header'>
          {quizIcon && (
            <div className='header-quiz'>
              <div
                className={`header-icon-container header-icon-${selectedQuiz.quiz.title.toLowerCase()}`}
              >
                {' '}
                <img src={quizIcon} alt='Quiz Icon' className='quiz-icon' />
              </div>
              <h2 className='quiz-title'>{selectedQuiz.quiz.title}</h2>
            </div>
          )}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>
        {!selectedQuiz ? (
          <Main quizess={quizess} setSelectedQuiz={setSelectedQuiz} />
        ) : (
          <Quiz quiz={selectedQuiz.quiz} icon={quizIcon} />
        )}
      </div>
    </div>
  )
}

export default App
