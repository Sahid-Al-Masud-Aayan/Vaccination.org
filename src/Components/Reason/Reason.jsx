import React from 'react'
import './Reason.css'
import { MdOutlineShield } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { FiThermometer } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";


const Reason = () => {
  return (
    <>
      <div className="mainbanner padderLined bg-[url('/banner3.png')]">
      <div className="container">
        <div className="betweenText">
            <h1 className='largeHeaderText'>
                Why get vaccinated
                <br /> today?
            </h1>
            <p className='destext'>
            Magna adipiscing at elit at ornare lectus nibh lorem. 
            Ac, sed ac lorem pellentesque vestibulum risus matti. 
            In molestie condimentum malesuada non.
            </p>
        </div>
        <div className="flexedCard">
            <div className="bigCd">
              <div className="LarIcondiv">
                <MdOutlineShield className='shieldcon'/>
              </div>
                <h2 className='cardHeader'>
                Protects your immune 
                system against viruses
                </h2>
                <p className="CardDes">
                Velit ut consectetur mauris, orci amet, 
                faucibus. <br />
                Sit turpis fringilla ipsum pretium,
                dictum. Dolor eget vel nulla lorem ac.
                </p>
                <Link className='flexedLink' to='#'>
                  <h2>Read More</h2>
                  <FaArrowRight/>
                </Link>
            </div>
            <div className="SmallCd">
              <div className="SmallIcondiv">
                <FiUsers className='pplcon'/>
              </div>
                <h2 className='cardHeaderW'>
                Minimize the spread
                of the Virus
                </h2>
                <Link className='flexedLinkSm' to='#'>
                  <h2>Read More</h2>
                  <FaArrowRight/>
                </Link>
            </div>
            <div className="SmallCd">
              <div className="SmallIcondiv">
                <FiThermometer className='pplcon'/>
              </div>
                <h2 className='cardHeaderWm'>
                Protect Yourself
                </h2>
                <Link className='flexedLinkSm' to='#'>
                  <h2>Read More</h2>
                  <FaArrowRight/>
                </Link>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Reason
