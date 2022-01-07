import * as React from 'react'

import Header from './header'
import Footer from './footer'
import Menu from './menu';

import "../styles/index.scss"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      
      <Header></Header>
      <Menu></Menu>
      <main>
        {children}

      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout