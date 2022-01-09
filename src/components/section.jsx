import * as React from 'react'

import "../styles/section.scss"

const Section = ({ level, title, children, description, renderAs }) => {
    let titleEle;

    switch (level) {
        case 1:
            titleEle = <h1 className="section__title">{title}</h1>;
            break;
        case 2:
            titleEle = <h2 className="section__title">{title}</h2>;
            break;
        case 3:
            titleEle = <h3 className="section__title">{title}</h3>;
            break;
        case 4:
            titleEle = <h4 className="section__title">{title}</h4>;
            break;
        case 5:
            titleEle = <h5 className="section__title">{title}</h5>;
            break;
        case 6:
            titleEle = <h6 className="section__title">{title}</h6>;
            break;
        default:
            titleEle = <p className="section__title">{title}</p>;
            break;
    }

    const descriptionEle = description ? <p className="section__description"
        dangerouslySetInnerHTML={{'__html':description}}></p> : ''
    const headerEle = title || description ?
        <header className="section__header">
            {titleEle}
            {descriptionEle}
        </header> : ''

    if (renderAs === "aside") {

        return (
            <aside className="section">
                {headerEle}
                <div className="section__content">
                    {children}
                </div>
            </aside>
        )
    }

    if (renderAs === "div") {

        return (
            <div className="section">
                {headerEle}
                <div className="section__content">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <section className="section">
            {headerEle}
            <div className="section__content">
                {children}
            </div>
        </section>
    )
}

export default Section