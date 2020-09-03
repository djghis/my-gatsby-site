import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>How to contact me</h1>
            <a href="tel:07992003175">Tel: 07792003175</a>
            <br></br>
            <a href="mailto:djghis@hotmail.com?subject=`Business oportunity`" target="_blank"> djghis@hotmail.com</a>
        </Layout>
         
    )
}

export default ContactPage