import * as React from 'react'
import Helmet from 'react-helmet';

import Header from './header'
import Footer from './footer'
import Menu from './menu';

import "../styles/index.scss"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

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