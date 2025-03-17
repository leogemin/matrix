import "../style/header.scss"
import Logo from "../assets/dentsulogo.png"
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
            <li className="header__top__menu__option">
                <Button type="button" color="white" handleClick={() => {}} content="Sign in / Join" />
            </li>
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