import React from 'react'
import "./Symp.css"

const Symp = () => {
  return (
    <>
      <div className="mainbanner bg-[url('/banner5.png')] w-full h-[981px]">
      <h1 className='headerSymp'>
        Covid-19 Prevention
        </h1>
      <p className='Pup'>
        <span className='spammedUp'>COVID-19</span> 
        Symptoms</p>
      <p className='blurredUpText'>
      Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br />
      Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.
      </p>
      <div className="imageIs">
      <img className='imageIs' src="./depressed.png" alt="" />
      </div>
      </div>
    </>
  )
}

export default Symp
