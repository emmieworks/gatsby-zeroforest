import React from "react"
import { graphql} from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Postcard from "../components/PostCard"
import Pagenation from "../components/Pagenation"

const BlogPageTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog"
        url ={location.pathname}
        />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Postcard
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
      <Pagenation
          numPages = {pageContext.numPages}
          currentPage = {pageContext.currentPage}
          pathBase = {pageContext.pathBase}
      />
    </Layout>
  )
}
export default BlogPageTemplate

export const pageQuery = graphql`
  query BlogPageQuery($skip: Int!,$limit: Int!) {
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
      skip:$skip
      limit:$limit
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