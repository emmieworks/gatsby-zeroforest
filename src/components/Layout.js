import React from "react"
import styled from "styled-components"
import GlobalStyle from "../style/GlobalStyle"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"

const Wrapper = styled.div`
  width:var(--width);
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 780px) {
    max-width:90vw;
    width:90vw;
  }
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
