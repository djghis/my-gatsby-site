import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import footerStyles from '../styles/components/footer.module.scss'
// import SocialMediaButtons from './social-media-buttons'
import InstaLogo from '../images/insta-logo.png'


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
        <footer className={footerStyles.footer}>
            <p>This site was built by {data.site.siteMetadata.author}, © 2020
              <span>
                <a href='https://www.instagram.com/ggdev_elopment/' target="_blank" rel="noreferrer">
                  <img className={footerStyles.instaLogo} src={InstaLogo} alt="Intagram Logo" ></img>
                </a>
              </span>
            </p>

            {/* <SocialMediaButtons/> */}
        </footer>
    )
}

export default Footer