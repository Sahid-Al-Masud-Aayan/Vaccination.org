import React from 'react'
import "./Last.css"
import { FiSend } from "react-icons/fi";

const Last = () => {
  return (
    <>
      <div className=" bg-[#ebebeb] w-full h-[934px] flex justify-center items-center">
      <div className="flex justify-center items-center">
  <div className="mainbanner bg-[url('/vaccine.png')] bg-center bg-cover w-[1184px] h-[478px]">
    <h1 className="BlueHeader">
      Feedback
    </h1>
    <h2 className="BlueSub">
      What our Patients Think
    </h2>
    <p className='desBlued'>
    Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br />
    Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.
    </p>
    <div className="toFlexLasted">
      <div className="boxed group">
        <div className="flexedInBox">
          <img src="./clientq.svg" alt="" />
          <div className="column">
            <h1 className='clientName group-hover:text-white duration-200'>
            Oyindamola Maja
            </h1>
            <p className='located group-hover:text-white duration-200'>
            Badagry, Lagos
            </p>
          </div>
        </div>
        <h2 className='cldes group-hover:text-white duration-200'>
        “Been stressing about a close centre
        to get the <span className='spammedUp group-hover:text-white duration-200'>covid-19</span> vaccine, until
        i tried Vaccination.ng”
        </h2>
      </div>
      <div className="boxed group">
        <div className="flexedInBox">
          <img src="./clientr.svg" alt="" />
          <div className="column">
            <h1 className='clientName group-hover:text-white duration-200'>
            Okeowo Lekan
            </h1>
            <p className='located group-hover:text-white duration-200'>
            Ikeja, Lagos
            </p>
          </div>
        </div>
        <h2 className='cldes group-hover:text-white duration-200'>
        “Got my vaccine very close to my house.
        Was very easy scheduling
        an appointment.”
        </h2>
      </div>
      <div className="boxed group">
        <div className="flexedInBox">
          <img src="./clientp.svg" alt="" />
          <div className="column">
            <h1 className='clientName group-hover:text-white duration-200'>
            Kafaru Temitope
            </h1>
            <p className='located group-hover:text-white duration-200'>
            Obanikoro, Lagos
            </p>
          </div>
        </div>
        <h2 className='cldes group-hover:text-white duration-200'>
        “Been stressing about a close centre
        to get the <span className='spammedUp group-hover:text-white duration-200'>covid-19</span> vaccine, until
        i tried Vaccination.ng”
        </h2>
      </div>
      
    </div>
    <div className="centerdItem">
  <div className="mailer">
    <div className="colled">
      <h1 className='largeHeaderText mt-[72px]'>
        Get a quote
      </h1>
      <p className='suggesterforu'>
      Please do enter your email address below
      </p>
      <div className="flex items-center mt-[40px]">
        <input className='lastInp placeholder: font-montserrat text-black/25 font-medium text-[24px]' type="email" placeholder='lenux.ng@gmail.com' />
        <button className='lastever'>
          <FiSend className='text-[33px] text-white'/>
        </button>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Last
