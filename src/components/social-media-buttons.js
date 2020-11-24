import React from 'react'
// import '../styles/components/_social-media-buttons.scss'
// import './social-media-buttons.module.scss'

const SocialMediaButtons = () => {
    return (
        <ul className="social-media">
            <li>
                <a href="https://www.facebook.com/djghis/" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <span> - Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/djghis" target="_blank">
                    <i className=" fa fa-twitter" aria-hidden="true"></i>
                    <span> - Twitter</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <i className="fa fa-google" aria-hidden="true"></i>
                    <span> - Google</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/ggdev_elopment/" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <span> - Instagram</span>
                </a>
            </li>
        </ul>
    )
}

export default SocialMediaButtons