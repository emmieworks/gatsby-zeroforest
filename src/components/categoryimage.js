import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"


const Wrapper = styled.figure`
.category-img{
  width:80px;
  height:80px;
  @media screen and (max-width: 780px) {
    width:50px;
    height:50px;
  }
}
`

export default props => {
  const catImages = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: {eq: "png"},
          sourceInstanceName: {eq: "assets"}
        })
      {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const image = catImages.allFile.edges.find(n => {
    return n.node.relativePath.includes(props.filename)
  });
  if (!image) { return null }
  const imageFluid = image.node.childImageSharp.fluid
  return (
    <Wrapper>
      <Img
        fluid={imageFluid}
        alt={props.alt}
        className="category-img"
      />
    </Wrapper>
  )
}