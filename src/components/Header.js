import React, { useState } from 'react'
import { ReactComponent as Logo } from '../assets/am-logo.svg'
import { ReactComponent as Switch } from '../assets/sun-moon-switch.svg'
import { Link } from 'react-router-dom'

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="logo">
        <Logo />
      </div>
      <div className="header-right-part">
        <Switch className="mode-switch" onClick={handleToggleDarkMode} />
        <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <svg width="53" height="40" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line className="line line1" y1="2" x2="53" y2="2" stroke="black" strokeWidth="4" />
            <line className="line line2" y1="20" x2="53" y2="20" stroke="black" strokeWidth="4" />
            <line className="line line3" y1="38" x2="53" y2="38" stroke="black" strokeWidth="4" />
          </svg>
        </div>
        <nav className={`menu ${isMenuOpen ? 'slide-in' : 'slide-out'}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/references">References</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
