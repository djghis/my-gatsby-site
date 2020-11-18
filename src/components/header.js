import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"


// import './header.module.scss'
// import headerStyles from '../styles/components/header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
  
  `)
  return (
  <header className="header">
    <h1>
      <Link className="title" to='/'>
      {data.site.siteMetadata.title}
      </Link>
    </h1>
    <nav>
      <ul className="nav-list">
        <li><Link className="nav-item" activeClassName="active-nav-item" to="/">Home</Link></li>
        <li><Link className="nav-item" activeClassName="active-nav-item"  to="/about">About Me</Link></li>
        <li><Link className="nav-item" activeClassName="active-nav-item"  to="/contact">Contact Me</Link></li>
        <li><Link className="nav-item" activeClassName="active-nav-item"  to="/blog">My blog</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
