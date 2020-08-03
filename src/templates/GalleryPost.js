import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PostWrapper from "./postStyle"

const GalleryPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const tableOfContens = data.markdownRemark.tableOfContents
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        url ={location.pathname}
      />
      <PostWrapper>
        <article>
          <header>
            <p className="category">
              {post.frontmatter.category}
            </p>
            <h1>
              {post.frontmatter.title}
            </h1>
            <div className="info">
              <div className="date">
                {post.frontmatter.date}
              </div>
            </div>
          </header>
            {post.frontmatter.featured && (
            <Img
              fluid={post.frontmatter.featured.childImageSharp.fluid}
              alt={post.frontmatter.title}    />
              )}
            {tableOfContens && (
            <div className="toc">
              <h4>目次</h4>
              <div
                dangerouslySetInnerHTML={{__html: tableOfContens}}
               />
             </div>
            )}
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer>
          </footer>
        </article>
      </PostWrapper>
    </Layout>
  )
}

export default GalleryPost

export const pageQuery = graphql`
  query GalleryPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
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
`
