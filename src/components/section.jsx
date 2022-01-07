import * as React from 'react'

import "../styles/section.scss"

const Section = ({ children }) => {
    return (
        <section className="section">
            <div className="section__content">
                {children}
            </div>
        </section>
    )
}

export default Section