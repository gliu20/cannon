import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import "../styles/footer.scss"
// TODO refactor out footer link data
// TODO componentize socials

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__about">
                    <p className="footer__about-wordmark">The Cannon</p>
                    <p className="footer__about-description">The official (serious) newspaper of the University of Toronto
                        Engineering Society since 1978.</p>
                    <div className="footer__about-socials">
                        <a href="https://www.instagram.com/cannon.news/">insta</a>
                        <a href="https://www.facebook.com/cannon.news/">fb</a>
                    </div>
                </div>
                <div className="footer__nav">
                    <div className="footer__links">
                        <ul className="footer__links-column">
                            <li><Link className="button button--link" to="">About</Link></li>
                            <li><Link className="button button--link" to="">Contact</Link></li>
                            <li><Link className="button button--link" to="">EngSoc</Link></li>
                        </ul>
                        <ul className="footer__links-column">
                            <li><Link className="button button--link" to="">Past Issues</Link></li>
                            <li><Link className="button button--link" to="">Skule&trade;</Link></li>
                            <li><Link className="button button--link" to="">Student Life</Link></li>
                            <li><Link className="button button--link" to="">Opinions</Link></li>
                            <li><Link className="button button--link" to="">Gallery</Link></li>
                        </ul>
                    </div>
                    <div className="footer__logo">
                        <StaticImage placeholder="none" src="../images/cannon-footer.png" alt=""></StaticImage>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
