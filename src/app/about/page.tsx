import React from 'react'
import Header from '../components/about_nav'
import Counter from '../components/Counter'
import MissionValues from '../components/aboutsection'
import TestimonialSlider from '../components/testimonial'
import Footer from '../components/Footer'
import ConsultingSectionAbout from '../components/consultingSectionabout'

const page = () => {
  return (
    <div>
        <Header/>
        <Counter/>
        <ConsultingSectionAbout/>
        <MissionValues/>
        <TestimonialSlider/>
        <Footer/>

    </div>
  )
}

export default page
