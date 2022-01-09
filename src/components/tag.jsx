import * as React from 'react'
import { Link } from 'gatsby'

import "../styles/tag.scss"


const Tag = ({ to, children }) => {
    return (
        <Link to={to} className="tag">{children}</Link>
    )
}

export default Tag