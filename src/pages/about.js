import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
 
const AboutPage = () => {
    return (
        <div>
        <Header />
            <h1>A little bit about me:</h1>
            <p>I have been working in hotel and restaurant for a long time.</p>
            <p>And I hae no completed the Software developer course at CodeClan</p>
            <p><Link to="/contact">Contact Me</Link></p> 
            <Footer />
        </div>
    )
}

export default AboutPage