import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'



const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>Thank you for coming to visit my page.</h2>
      <h2>I am Ghislain but you can call me "GG".</h2>
      <p>I am a junior full stack developer currently working freelance designing websites and applications.</p>
      <p>I live in East Lothian and looking for junior role around Edinburgh and the lothians.</p>
      <p>I can work fully or part remote during the pandemic as well as come in office when needed.</p>
      <p>If you have a role for me or need a developer or a website? <Link to="/contact" className="no-decoration">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage