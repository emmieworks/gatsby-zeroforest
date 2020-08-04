import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 80px;

  @media (max-width: 768px) {
    flex: 0 1 48px;
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-circle" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 100, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo