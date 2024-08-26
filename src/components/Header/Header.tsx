import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'> 
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Rooms</a></li>
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