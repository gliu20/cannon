import * as React from 'react'

import "../styles/card.scss"

const Card = ({ title, children, description }) => {
    return (
        <article className="card">
            <header className="card__header">
                {title}
                {description}
            </header>
            <div className="card__content">
                {children}
            </div>
        </article>
    )
}

export default Card