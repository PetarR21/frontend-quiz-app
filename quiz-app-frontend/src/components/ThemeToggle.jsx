import IconSunDark from '../assets/images/icon-sun-dark.svg'
import IconMoonDark from '../assets/images/icon-moon-dark.svg'
import IconSunLight from '../assets/images/icon-sun-light.svg'
import IconMoonLight from '../assets/images/icon-moon-light.svg'

const ThemeToggle = ({ theme, setTheme }) => {
  const handleToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  const iconSun = theme === 'light' ? IconSunDark : IconSunLight
  const iconMoon = theme === 'light' ? IconMoonDark : IconMoonLight

  return (
    <div className='theme-toggle'>
      <img src={iconSun} alt='Sun Icon' />
      <label className='switch'>
        <input
          checked={theme === 'dark'}
          type='checkbox'
          onChange={handleToggle}
        />
        <span className='slider round'></span>
      </label>
      <img src={iconMoon} alt='Moon Icon' />
    </div>
  )
}

export default ThemeToggle
