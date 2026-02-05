import React from 'react'
import Header from '../components/about_nav'
import Counter from '../components/Counter'
import ConsultingSection from '../components/ConsultingSection'
import MissionValues from '../components/aboutsection'
import TestimonialSlider from '../components/testimonial'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Header/>
        <Counter/>
        <ConsultingSection/>
        <MissionValues/>
        <TestimonialSlider/>
        <Footer/>

    </div>
  )
}

export default page
