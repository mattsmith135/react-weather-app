import { ReactComponent as Logo } from '../media/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Logo title={'Wizard hat'}/>
        <h1 id='logo__text'>Weather<span>Wizard</span></h1>
      </div>
      <p id='header__text'>
        The app that predicts the future (of weather).
        This makes checking the weather a breeze, so you can focus on what really matters - like enjoying a sunny day or cozying up on a rainy one.
      </p>
    </div>
  )
}

export default Header