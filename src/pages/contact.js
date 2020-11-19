import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import ContactForm from '../components/contact-form'


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>How to contact me</h1>
            <p>You can contact me by phone by dialing the number or click on the link below :</p>
            <a href="tel:07992003175">Tel: 07792003175</a>
            <br></br>
            <br></br>
            <p>You can also email me by clicking on ht elibk below (It should open a new email in your favorite email client.)</p>
            <a href="mailto:djghis@hotmail.com?subject=`Business oportunity`" target="_blank"> djghis@hotmail.com</a>
            <p>You can also use the contact form below and I will get back to you as soon as I can.</p>
            <ContactForm/>
        </Layout>
         
    )
}

export default ContactPage