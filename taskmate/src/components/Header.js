import React from 'react'
import logo from '../assets/logo.png'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt='' />
    </div>
  )
}

export default Header
