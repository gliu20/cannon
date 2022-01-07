import * as React from 'react'
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
                        <a href="">insta</a>
                        <a href="">fb</a>
                    </div>
                </div>
                <div className="footer__nav">
                    <div className="footer__links">
                        <ul className="footer__links-column">
                            <li><a className="button button--link" href="">About</a></li>
                            <li><a className="button button--link" href="">Contact</a></li>
                            <li><a className="button button--link" href="">EngSoc</a></li>
                        </ul>
                        <ul className="footer__links-column">
                            <li><a className="button button--link" href="">Past Issues</a></li>
                            <li><a className="button button--link" href="">Skule&trade;</a></li>
                            <li><a className="button button--link" href="">Student Life</a></li>
                            <li><a className="button button--link" href="">Opinions</a></li>
                            <li><a className="button button--link" href="">Gallery</a></li>
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
