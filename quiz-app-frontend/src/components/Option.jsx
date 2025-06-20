import CorrectIcon from '../assets/images/icon-correct.svg'
import WrongIcon from '../assets/images/icon-error.svg'

const Option = ({ option, id, selectedOption, setSelectedOption, correct }) => {
  const idToLetter = (id) => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return letters[id] || ''
  }

  const selectOption = () => {
    if (correct === null) {
      setSelectedOption(id)
    }
  }

  let optionIcon = null

  if (correct !== null) {
    if (correct !== id && selectedOption === id) {
      optionIcon = WrongIcon
    } else if (correct === id) {
      optionIcon = CorrectIcon
    }
  }

  return (
    <div
      className={`option ${selectedOption === id ? 'selected' : ''} ${
        selectedOption === id && correct !== null
          ? correct === id
            ? 'correct'
            : 'wrong'
          : ''
      } ${correct !== null ? 'validated' : ''}`}
      onClick={selectOption}
    >
      <div className='option-left'>
        <div className='option-letter'>
          <span>{idToLetter(id)}</span>
        </div>
        <div className='option-text'>{option}</div>
      </div>
      <div>
        {optionIcon ? (
          <img src={optionIcon} alt='Option Icon' className='option-icon' />
        ) : null}
      </div>
    </div>
  )
}

export default Option
