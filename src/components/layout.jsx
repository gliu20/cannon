import * as React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import Footer from './footer'
import "../styles/index.scss"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      
      <Header></Header>
      <main>
        {children}

      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout