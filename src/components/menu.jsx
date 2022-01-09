import * as React from 'react'
import { Link } from 'gatsby'
import "../styles/menu.scss"

// TODO refactor out link data

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu__content">
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <Link className="button button--text" to="/category/skule/">Skule&trade;</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link className="button button--text" to="/category/student-life/">Student Life</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link className="button button--text" to="/category/opinions/">Opinions</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link className="button button--text" to="/category/gallery/">Gallery</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link className="button button--text" to="/issues/">Issues</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link className="button button--text" to="/about/">About</Link>
                    </li>
                </ul>
                <button className="search">Search</button>
            </div>
        </nav>
    )
}


export default Menu
