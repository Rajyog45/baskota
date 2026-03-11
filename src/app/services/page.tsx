import React from 'react'
import Header from '../components/about_nav'
import CaseStudy from '../components/services/Header'
import Service2 from '../components/services/service2'
import Service3 from '../components/services/Service3'
import Footer from '../components/Footer'


const page = () => {
  return (
    <div>
      <Header/>
      <CaseStudy/>
      <Service2/>
      <Service3/>
      <Footer/>
    </div>
  )
}

export default page
