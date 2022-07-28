import React from 'react'
import './css/header.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
      <div className='headerContent'>
        <NavLink to='/houses'>
        <a href='#'> <button className='navHms'> HMS</button> </a>
        </NavLink>
        <NavLink to="/houses">
        <button className='navEdit'>Home</button>
        </NavLink>
        <NavLink to="/about">
        <button className='navEdit'>About</button>
        </NavLink>
        <NavLink to="/register">
        <button className='navEdit'>Register</button>
        </NavLink>
        <NavLink to="/login">
        <button className='navEdit'>Log In</button>
        </NavLink>
        
 
    </div>
  )
}

export default NavBar