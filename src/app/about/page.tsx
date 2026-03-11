import React from 'react'
import Header from '../components/about_nav'
import Counter from '../components/about/Counter'
import MissionValues from '../components/about/aboutsection'
import TestimonialSlider from '../components/about/testimonial'
import Footer from '../components/Footer'
import ConsultingSectionAbout from '../components/about/consultingSectionabout'

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
