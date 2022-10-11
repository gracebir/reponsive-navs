import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <div className="logo">react nav.</div>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="navbar">
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
