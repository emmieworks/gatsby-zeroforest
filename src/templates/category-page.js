import React from "react"
import { graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Postcard from "../components/postcard"

const CategoryPageTemplate = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO
        title="Category"
        url ={location.pathname}
       />
       <h2
        style={{
          marginTop: 0,
          marginBottom:30,
          textAlign:`center`
        }}
       >
       Category :  { pageContext.category }</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Postcard
            key={node.fields.slug}
            title={title}
            category={pageContext.category}
            slug={node.fields.slug}
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
export default CategoryPageTemplate

export const pageQuery = graphql`
query CategoryPageQuery($category: String!) {
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
          category: { in: [$category] }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC })
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