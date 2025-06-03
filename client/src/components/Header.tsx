import "../style/header.scss"
import Logo from "../assets/img/dentsulogo.png"
import Button from "./Button"

const Header = () => {
  return ( 
    <header className="header">
       <div className="header__top">
           <img className="header__top__logo" src={Logo} alt="" /> 
           <ul className="header__top__menu">
            <li className="header__top__menu__option">
                <span>Careers</span>
            </li>
            <li className="header__top__menu__option">
                <span>Help</span>
            </li>
            <li className="header__top__menu__drop">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </li>
            <Button type="button" color="white" handleClick={() => {}} content="Sign in / Join" />
           </ul>
        </div>
        <nav className="header__nav">
            <a href="" className="header__nav__link">Reservations</a>
            <a href="" className="header__nav__link">Reservations</a>
            <a href="" className="header__nav__link">Reservations</a>
            <a href="" className="header__nav__link">Reservations</a>
            <a href="" className="header__nav__link">Reservations</a>
            <a href="" className="header__nav__link">Reservations</a>
        </nav> 
    </header>
    )
}

export default Header