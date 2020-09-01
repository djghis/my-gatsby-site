import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
    return (
        <div>
        <Header />
            <h1>How to contact me</h1>
            <a href="tel:07992003175">tel: 07792003175</a>
            <br></br>
            <a href="mailto:djghis@hotmail.com?subject=`Business oportunity`" target="_blank"> djghis@hotmail.com</a>

            <Footer />
        </div>
    )
}

export default ContactPage