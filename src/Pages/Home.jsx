import React from 'react'
import Banner from '../Components/Banner/Banner'
import Slider from '../Components/Slider/Slider'
import DBInput from '../Components/DBInput/DBInput'
import Reason from '../Components/Reason/Reason'
import VaccineToday from '../Components/VaccineToday/VaccineToday'
import Symp from '../Components/Symptoms/Symp'
import Last from '../Components/Last/Last'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Banner/>
    <Slider/>
    <DBInput/>
    <Reason/>
    <VaccineToday/>
    <Symp/>
    <Last/>
    <Footer/>
    </>
  )
}

export default Home
