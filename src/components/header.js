import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.header`
  width: 800px;
  margin-bottom: 1.45rem;
  margin-left: auto;
  margin-right: auto;
  .logo{
    margin: 20px auto;
  }
  @media screen and (max-width: 780px) {
    max-width:90vw;
    width:90vw;
  }
`

const Header = props => {
  const data = useStaticQuery(graphql`
  query{
    logo:file(relativePath: {eq: "logo-circle.png"}) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }`)
  return (
    <Wrapper>
      <div className="logo" >
        <Link to={`/`}>
          <Img
            fixed={data.logo.childImageSharp.fixed}
            alt={data.site.siteMetadata.title}
           />
        </Link>
      </div>
    </Wrapper>
  )
}

export default Header
