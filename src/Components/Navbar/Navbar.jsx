import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="forRes">
    <nav className='navmenu'>
      <div className="container px-[70px]">
        <div className="menurow">
          <Link to='/'>
          <img className='navlogo' src={logo} alt="logo" />
          </Link>
          <div className="menulinks">
            <Link to='#' className='linksep'>
            Home
            </Link>
            <Link to='#' className='linksep'>
            Services
            </Link>
            <Link to='#' className='linksep'>
            Schedule
            </Link>
            <Link to='#' className='linksep'>
            Contact us
            </Link>
          </div>
          <Link className='menubutton' to='#'>
          Check Status</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
