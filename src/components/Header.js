import { ReactComponent as Logo } from '../media/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Logo title={'Wizard hat'}/>
        <h1 id='logo__text'>WeatherWizard</h1>
      </div>
      <p id='header__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
    </div>
  )
}

export default Header