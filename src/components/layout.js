import React from "react"
import styled from "styled-components"
import GlobalStyle from "../style/GlobalStyle"
import Header from "../components/header"
import Footer from "../components/footer"

const Wrapper = styled.div`
  width:var(--width);
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 780px) {
    max-width:90%;
  }

  .logo{
    margin: 20px auto;
  }
`
const Layout = props => {
  const { children } = props
  return (
    <Wrapper>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <GlobalStyle />
    </Wrapper>
  )
}

export default Layout
