import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  article{
    margin: 30px;
    text-align: center;
    width: 30%;
  }
  a{
    text-decoration: none;
  }
  h3{
    font-size:15px;
  }
  @media screen and (max-width: 780px) {
  }
`

const Gallery = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <h1>Gallery</h1>
      <Wrapper>
      {posts.map(({ node }) => {
        return (
          <article key={node.fields.slug}>
            <Link to={`/gallery${node.fields.slug}`}>
              {node.frontmatter.featured && (
               <Img
                  className="featured"
                  fluid={node.frontmatter.featured.childImageSharp.fluid}
                  alt={node.frontmatter.title}       />
              )}
              <h3>{node.frontmatter.title}</h3>
            </Link>
          </article>
        )
      })}
      </Wrapper>
    </Layout>
  )
}
export default Gallery

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: {collection: {eq: "gallery"}}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      )
      {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            category
            featured{
              childImageSharp{
                fluid(maxWidth: 800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
