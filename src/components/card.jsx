import * as React from 'react'
import { Link } from 'gatsby'
import Picture from "../components/picture"

import "../styles/card.scss"


const Card = ({ level, title, subtitle, description, mediaSrc, mediaAlt, mediaModifiers, toSlug, modifiers, children }) => {
    let titleEle;

    switch (level) {
        case 1:
            titleEle = <h1 className="card__title">{title}</h1>;
            break;
        case 2:
            titleEle = <h2 className="card__title">{title}</h2>;
            break;
        case 3:
            titleEle = <h3 className="card__title">{title}</h3>;
            break;
        case 4:
            titleEle = <h4 className="card__title">{title}</h4>;
            break;
        case 5:
            titleEle = <h5 className="card__title">{title}</h5>;
            break;
        case 6:
            titleEle = <h6 className="card__title">{title}</h6>;
            break;
        default:
            titleEle = <p className="card__title">{title}</p>;
            break;
    }

    const subtitleEle = subtitle ? <p className="card__subtitle">{subtitle}</p> : ''

    const descriptionEle = <p class="card__body-text" dangerouslySetInnerHTML={({
        '__html': description
    })}></p>

    const headerEle = title || subtitle ?
        <header className="card__header">
            {titleEle}
            {descriptionEle}
            {subtitleEle}
        </header> : ''


    const pictureEle = mediaSrc ? <Picture src={mediaSrc} alt={mediaAlt} modifiers={mediaModifiers}></Picture> : ''

    return (
        <Link to={`/articles/${toSlug}/`} className="card__wrapper">
            <article className={'card ' + (modifiers || '')}>
                {pictureEle}
                {headerEle}
                <div className="card__content">
                    {children}
                </div>
            </article>

        </Link>
    )
}

export default Card