import React from 'react'
import Header from '../components/about_nav'
import ContactPage from '../components/ContactForm'
import ContactInfo from '../components/map'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <ContactPage/>  
      <ContactInfo/>
      <Footer/>
    </div>
  )
}

export default page
