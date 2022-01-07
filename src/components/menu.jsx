import * as React from 'react'

import "../styles/menu.scss"

// TODO refactor out link data

const Menu = () => {
    return (
        <nav class="menu">
            <div class="menu__content">
                <ul class="menu__list">
                    <li class="menu__list-item">
                        <a class="button button--text" href="category.html">Skule&trade;</a>
                    </li>
                    <li class="menu__list-item">
                        <a class="button button--text" href="category.html">Student Life</a>
                    </li>
                    <li class="menu__list-item">
                        <a class="button button--text" href="category.html">Opinions</a>
                    </li>
                    <li class="menu__list-item">
                        <a class="button button--text" href="category.html">Gallery</a>
                    </li>
                    <li class="menu__list-item">
                        <a class="button button--text" href="category.html">Issues</a>
                    </li>
                    <li class="menu__list-item">
                        <a class="button button--text" href="category.html">About</a>
                    </li>
                </ul>
                <button class="search">Search</button>
            </div>
        </nav>
    )
}


export default Menu
