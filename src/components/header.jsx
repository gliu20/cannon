import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import "../styles/header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <Link className="header__home-link" to="/">
                    <StaticImage placeholder="none" className="header__logo" alt="" src="../images/cannon-header.png"></StaticImage>
                    <div className="header__wordmark">The Cannon</div>
                </Link>
                <div className="header__motto">
                    <span>Skule&trade;&apos;s </span>
                    <span>newspaper </span>
                    <span>
                        <span>since </span>
                        <span>1978</span>
                    </span>
                </div>
            </div>
        </header>
    )
}


export default Header