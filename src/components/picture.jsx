import * as React from 'react'
import "../styles/picture.scss"

// TODO later figure out adding
// dynamic images with GatsbyImage for perf/SEO

const Picture = ({ src, alt, modifiers }) => {
    return (
        <div className={"picture " + (modifiers || '')}>
            <img className="picture__img" alt={alt} src={src}></img>
        </div>
    )
}

export default Picture
