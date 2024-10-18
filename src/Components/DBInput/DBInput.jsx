import React from 'react'
import './DBInput.css'
import { Link } from 'react-router-dom'

const DBInput = () => {
  return (
    <>
      <div className="mainbanner bg-[url('/banner2.png')] w-full h-[466px] px-[70px] py-[63px]">
      <div className="inputArea relative">
        <div className="topHeader absolute">
        <h2 className='ScheduleTxt my-[35px] ml-[93px]'>Check your COVID-19 result on our Database</h2>
        <div className="InpFlex">
            <input className='MainInp' type="text" placeholder='State' />
            <input className='MainInp' type="number" placeholder='NIK Number' />
            <button className="InpButton">
            Check
            </button>
        </div>
        <div className="conclusion">
            <h2 className='bluText'>
            Need a certificate for your COVID-19 result? Please click <Link to='#' className='linkedUp'>here</Link>
            </h2>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default DBInput

