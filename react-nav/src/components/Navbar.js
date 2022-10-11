import React from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header>
      <div className="logo">React nav.</div>
      <div onClick={toggle} className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`navbar ${isOpen ? `navbar-active`: ``}`}>
        <ul>
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

export default Navbar
