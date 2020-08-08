import React from "react"
import styled from "styled-components"
import GlobalStyle from "../style/GlobalStyle"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"

const Wrapper = styled.div`
  margin-bottom: 1.45rem;
`
const Layout = props => {
  const { children } = props
  return (
    <Wrapper>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <GlobalStyle />
    </Wrapper>
  )
}

export default Layout
