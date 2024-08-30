import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'> 
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f">
                <li><Link to="/">Home</Link></li>
                <li><a href="">About</a></li>
                <li><Link to="/room">Rooms</Link></li>
                <li><a href="">Reustrant</a></li>
                <li><a href="">Conference</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
        <div className="header-phone">+38 032 297 50 20</div>
    </header>
  )
}

export default Header