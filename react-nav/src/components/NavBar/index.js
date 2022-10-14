import React from 'react'
import './NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className='header'>
      <h2 className='header-logo'>React nav.</h2>
      <div onClick={toggle} className="hamburger">
        <li className="line"></li>
        <li className="line"></li>
        <li className="line"></li>
      </div>
      <nav className={`nav-bar ${isOpen ? `active`: ``}`}>
        <ul className='navlink'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Feature</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
