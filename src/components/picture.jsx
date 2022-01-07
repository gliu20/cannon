import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "../styles/picture.scss"

const Picture = ({ src, alt, modifiers }) => {
    return (
        <div className={"picture " + modifiers}>
            <StaticImage className="picture__img" alt={alt} src={src}></StaticImage>
        </div>
    )
}

export default Picture
