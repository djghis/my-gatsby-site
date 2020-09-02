import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata{
            author,
            description
          }
        }
      }
      
    `)
    return (
        <footer>
            <p>This site was built by {data.site.siteMetadata.author}, © 2020</p>
        </footer>
    )
}

export default Footer