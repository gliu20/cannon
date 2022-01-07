import * as React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <Link className="header__home-link" to="/">
                    <img className="header__logo" alt="" src="img/cannon-header.png"></img>
                    <div className="header__wordmark">The Cannon</div>
                </Link>
                <div className="header__motto">
                    <span>Skule&trade;&apos;s</span>
                    <span>newspaper</span>
                    <span>since 1978</span>
                </div>
            </div>
        </header>
    )
}


export default Header