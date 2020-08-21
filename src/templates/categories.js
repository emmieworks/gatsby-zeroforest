import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Postcard from "../components/PostCard"
import BlogMenu from "../components/BlogMenu"

const CategoryPageTemplate = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO
        title="Category"
        url ={location.pathname}
       />
       <h1
          style={{
            marginBottom: 60,
            fontSize: 24,
            textAlign: `center`,
          }}
      >Category : { pageContext.category }</h1>
       <div className="container"
         style={{
            marginBottom: 100,
          }}
        >
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Postcard
            key = {node.fields.slug}
            title = {title}
            category = {pageContext.category}
            slug = {node.fields.slug}
            date = {node.frontmatter.date}
            description = {node.frontmatter.description}
            excerpt = {node.excerpt}
            tags = {node.frontmatter.tags}
          />
        )
      })}
      </div>
      <BlogMenu />
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