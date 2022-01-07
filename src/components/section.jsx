import * as React from 'react'

import "../styles/section.scss"

const Section = ({ title, children, description }) => {
    return (
        <section className="section">
            <header className="section__header">
                {title}
                {description}
            </header>
            <div className="section__content">
                {children}
            </div>
        </section>
    )
}

export default Section