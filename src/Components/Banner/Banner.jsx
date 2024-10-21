import React from 'react'
import './Banner.css'
import Navbar from '../Navbar/Navbar'
import ResNavbar from '../ResponsiveNavbar/ResNavbar'
import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa6";
import { TbMapPin } from "react-icons/tb";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="mainbanner bg-[url('/banner.png')] w-full h-[1024px] ">
    <Navbar/>
    <ResNavbar/>                                                                                                                                                                                          
    <div className="padder container">
      <div className="bannerPartMain ">
        <div className="firstTextPart">
          <h1 className='header'>Get Vaccinated. Boost your Immune System</h1>
          <h2 className='bigHeader'>COVID-19 Vaccination <br />
            Got Easier With,<br />
           <span className='forColor'>Vaccination.ng</span> 
            </h2>
            <h2 className='lastText'>Vaccination.ng will help you find the nearest <br />
            centre for vaccination, in all 36 states in Nigeria.
            </h2>
            <div className="twinButtons">
              <Link className='bannerLink'>
              Get Vaccine
              </Link>
              <Link className='bannerLink'>
              Help Center
              </Link>
            </div>
        </div>
        <img className='w-[622px] h-[617px]' src="./bannerSide.svg" alt="" />
      </div>
      <div className="scheduleItx">
        <div className='timeIcon'>
        <FaRegClock />
        </div>
        <h2 className='ScheduleTxt'>Schedule your Vaccination</h2>
      </div>
      <div className="ScheduleGroup ">
      <div className="ScheduleGrouptwo ">
        <div className="linedUp">
          <div className="forSide">
        <div className='timeIcon'>
        <TbMapPin />
        </div>
        <div className="flex flex-col">
        <h2 className="subtext">
          Location
        </h2>
        <h2 className='ScheduleTxt'>Ikeja Lagos, Nigeria</h2>
        </div>
          </div>
          <div className="forSide">
        <div className='timeIcon'>
        <LuCalendar />
        </div>
        <div className="flex flex-col">
        <h2 className="subtext">
        Date
        </h2>
        <h2 className='ScheduleTxt'>29 February, 2022</h2>
        </div>
          </div>
          <div className="forSide">
        <div className='timeIcon'>
        <MdOutlineShield />
        </div>
        <div className="flex flex-col">
        <h2 className="subtext">
        Vaccine Type
        </h2>
        <h2 className='ScheduleTxt'>Modena</h2>
        </div>
          </div>
          <button className='SubButton'>
            Submit
          </button>
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Banner
