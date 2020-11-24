import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
 
const AboutPage = () => {
    return (
        <Layout>
            <Head title="About me" />
            <h1>A little bit more about me:</h1>
            <p>I have worked in hotels and restaurant for a long time but it was time for a change.</p>
            <p>I have now graduated in Software development from CodeClan and looking to join an</p>
            <p>organisation where I can learn from my peers and supervisors and share the knowledge </p>
            <p>I have already acquired.</p>
            <p>I am loyal and I like to learn from others, having made my way up in my previous jobs</p>
            <p>I stayed 10 years with my last employers and 6 years with my first employers in Scotland.</p>
            <p><Link to="/contact" className="no-decoration">Contact Me</Link></p> 
        </Layout>
    )
}

export default AboutPage