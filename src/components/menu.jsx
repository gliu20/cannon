import * as React from 'react'

import "../styles/menu.scss"

// TODO refactor out link data

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu__content">
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a className="button button--text" href="category.html">Skule&trade;</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="button button--text" href="category.html">Student Life</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="button button--text" href="category.html">Opinions</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="button button--text" href="category.html">Gallery</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="button button--text" href="category.html">Issues</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="button button--text" href="category.html">About</a>
                    </li>
                </ul>
                <button className="search">Search</button>
            </div>
        </nav>
    )
}


export default Menu
