import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import Postcard from "../components/PostCard"
import Pagenation from "../components/Pagenation"
import BlogMenu from "../components/BlogMenu"

const Wrapper = styled.div`
  margin-bottom: 100px;

  h1{
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    padding: 10px;
    font-family: allura, cursive;
    &:after{
      position: absolute;
      bottom: 10px;
      left: calc(50% - 30px);
      width: 60px;
      height: 1px;
      content: '';
      border-radius: 3px;
      background: #707070;
    }
  }
`

const BlogPageTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog"
        url ={location.pathname}
        />
      <Wrapper>
      <h1>Blog</h1>
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
      </Wrapper>
      <BlogMenu />
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