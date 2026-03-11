import React from 'react'
import Navbar from './components/home/Navbar';
import Offer from './components/home/Offer';
import ConsultingSection from './components/home/ConsultingSection';
import StatsSection from './components/home/StatsSection';
import Choose from './components/home/Choose';
import Footer from './components/Footer';
import CaseStudies from './components/home/CaseStudies';


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
