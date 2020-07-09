import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Blog
            key={node.fields.slug}
            title={title}
            slug={node.fields.slug}
            category={node.frontmatter.category}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
          />
        )
      })}
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: {collection: {eq: "blog"}}
        frontmatter: {
          status: { ne: "draft" }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      )
      {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            tags
          }
        }
      }
    }
  }
`
