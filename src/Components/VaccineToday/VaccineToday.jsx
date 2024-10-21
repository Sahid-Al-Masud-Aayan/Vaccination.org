import React from 'react'
import './VaccineToday.css'
import { FaChevronDown } from "react-icons/fa6";


const VaccineToday = () => {
  return (
    <>
      <div className="mainbanner bg-[url('/banner4.png')] w-full h-[750px] paddedSec">
      <div className="container">
        <div className="toFlexthem">
        <div className="main">
      <h1 className='blackHeader'>
        Get your vaccine <br /> 
      registration today
      </h1>
      <p className='inputsLabel'>
      Patient’s Full Name
      </p>
      <input className='firstInp placeholder: font-montserrat text-black/25 font-medium text-[24px]' type="text" placeholder='Full name' />
      <p className='inputsLabel'>
      Mobile Number
      </p>
      <p className='inpDes'>
      Notifications for appointment and reminders will be sent to this <br />
      provided number
      </p>
      <div className="flex gap-9">
      <div className="relative">
      <input className='sectInp placeholder: font-montserrat text-black/25 font-medium text-[24px]' type="number" placeholder='Phone Number' />
      <div className="absolute top-[23px] left-[90px]">
      <div className="relative inline-block">
      <select className="block bg-transparent outline-none appearance-none">
        <option value=""></option>
        <option value="2">2</option>
        <option value="3">3</option>

      </select>
      <div className="absolute inset-y-0 right-[-3px] flex items-center pointer-events-none text-black/25">
      <FaChevronDown/>
      </div>
    </div>
      </div>
      <img className='absolute top-[15px] left-[30px] w-[40px] h-[40px]' src="./flag.svg" alt="" />
      </div>
      <button className='verV'>
        Verify
      </button>
        </div>
        </div>
        <img className='mt-[35px]' src="./ad.png" alt="" />
      </div>
      <button className="LargeSubButton">Submit</button>
      </div>
      </div>
    </>
  )
}

export default VaccineToday
