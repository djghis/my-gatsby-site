import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
 
const AboutPage = () => {
    return (
        <Layout>
            <h1>A little bit about me:</h1>
            <p>I have been working in hotel and restaurant for a long time.</p>
            <p>And I hae no completed the Software developer course at CodeClan</p>
            <p><Link to="/contact">Contact Me</Link></p> 
        </Layout>
    )
}

export default AboutPage