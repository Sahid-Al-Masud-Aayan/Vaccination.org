import React, { useState } from 'react'
import "./ResNavbar.css"
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'
import { FaAlignRight } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

const ResNavbar = () => {

    const [open, setOpen]= useState(false)


  return (
    <div className='forMobMenu'>
      <div className="container">
        <div className="buttonlogo">
            <Link to='/'>
          <img className='ResNavlogo' src={logo} alt="logo" />
            </Link>
            <div onClick={()=>setOpen(!open)} className='pagesButton'>
            <FaAlignRight />
                {
                    open&&
        <div className="ResPageCol">
            <div className="flex justify-end items-center mr-5">
                <IoCloseCircle/>
            </div>
            <div className="linksRes">
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
        </div>
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default ResNavbar
