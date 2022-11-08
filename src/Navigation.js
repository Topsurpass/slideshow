import React from 'react'
import './Navigation.css'
import logo from './Images/logopng.png'
import { FiMenu } from 'react-icons/fi';

export const Navigation = () => {
  return (
    <div className='navBar'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
            <span>
                <h2>A.A.A</h2>
                <p>Aluminium & Steel Construction</p>
            </span>
        </div>
        <div className='links'>
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Contact Us</span>
        </div>
        <div className='menu'><FiMenu/></div>
    </div>
  )
}
