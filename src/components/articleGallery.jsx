import * as React from 'react'

import "../styles/article-gallery.scss"

// TODO add logic to make sure it looks good style wise

const ArticleGallery = ({ left, center, right }) => {
    return (
        <section className="article-gallery">
            <div className="article-gallery__left">{left}</div>
            <div className="article-gallery__center">{center}</div>
            <div className="article-gallery__right">{right}</div>
        </section>
    )
}


export default ArticleGallery
