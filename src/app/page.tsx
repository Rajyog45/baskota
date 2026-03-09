import React from 'react'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
// import { motion } from "framer-motion";
import ConsultingSection from './components/ConsultingSection';
import StatsSection from './components/StatsSection';
import CaseStudy from './components/Header';
import Choose from './components/Choose';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';


const page = () => {
  return (
    <div>
      <Navbar/>
      <Offer/>
      <ConsultingSection/>
      <StatsSection/>
      {/* <CaseStudy/>  */}
      <CaseStudies/>
      <Choose/>
      <Footer/>
    </div>  
  )
}

export default page
