import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from '../components/head'

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... </p>
    <p>It might be Coming Soon, I am always working on Something New!</p>
    <p><Link to='/'>Let's go back to the Home Page</Link></p>
  </Layout>
)

export default NotFoundPage
