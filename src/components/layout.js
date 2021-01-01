import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/globalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
