import HTMLIcon from '../assets/images/icon-html.svg'
import CSSIcon from '../assets/images/icon-css.svg'
import JSIcon from '../assets/images/icon-js.svg'
import AccessibilityIcon from '../assets/images/icon-accessibility.svg'

const Main = ({ quizess, setSelectedQuiz }) => {
  const onQuizSelect = (quiz) => {
    setSelectedQuiz({
      quiz,
      icon:
        quiz.title === 'HTML'
          ? HTMLIcon
          : quiz.title === 'CSS'
          ? CSSIcon
          : quiz.title === 'JavaScript'
          ? JSIcon
          : AccessibilityIcon,
    })
  }

  if (!quizess || quizess.length === 0) {
    return (
      <div className='main'>
        <div className='main-header'>
          <h1>Loading quizzes...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className='main'>
      <div className='main-header'>
        <h1>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>
      <div className='cards'>
        {quizess.map((quiz) => {
          let icon = null
          switch (quiz.title) {
            case 'HTML':
              icon = HTMLIcon
              break
            case 'CSS':
              icon = CSSIcon
              break
            case 'JavaScript':
              icon = JSIcon
              break
            case 'Accessibility':
              icon = AccessibilityIcon
              break
            default:
              break
          }

          return (
            <div
              key={quiz.title}
              className='card'
              onClick={() => {
                onQuizSelect(quiz)
              }}
            >
              <div className='card-icon-container'>
                {icon && (
                  <img
                    className='card-icon'
                    src={icon}
                    alt={`${quiz.subject} Icon`}
                  />
                )}
              </div>
              <h2>{quiz.title}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main
