import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { SlSocialYoutube } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { CiTwitter } from 'react-icons/ci';
import { FiFacebook } from "react-icons/fi";


const Footer = () => {
  return (
    <>
      <div className="grayBg">
        <div className="mainbanner bg-[url('/footerbanner.png')] w-full h-[500px]">
        <div className="footerbt">
            <img src="./logo.svg" alt="" />
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
        <div className="socials">
            <Link className='iconed'>
            <SlSocialYoutube/>
            </Link>
            <Link className='iconed'>
            <RxInstagramLogo/>
            </Link>
            <Link className='iconed'>
            <CiTwitter/>
            </Link>
            <Link className='iconed'>
            <FiFacebook/>
            </Link>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
