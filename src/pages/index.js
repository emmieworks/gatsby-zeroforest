import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Postcard from "../components/PostCard"
import BlogMenu from "../components/BlogMenu"

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  padding: 10px;
  font-family: allura, cursive;
  font-size: 2rem;
  &:after{
    position: absolute;
    bottom: 10px;
    left: calc(50% - 30px);
    width: 60px;
    height: 1px;
    content: '';
    border-radius: 3px;
    background: var(--gray);
  }
`

const BlogSection = styled.section`
  .desc{
    text-align: center;
    margin-bottom: var(--middleMargin);
  }
`

const Index = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO location = {location} title = "Home" />
      <BlogSection className = "container">
        <SectionTitle>Blog</SectionTitle>
        <p className = "desc">Web制作／デザインをテーマに発信しています</p>
        <Link to="/blog/" className="btn">SEE MORE</Link>
      </BlogSection>

      <BlogMenu />
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {collection: {eq: "blog"}}
        frontmatter: {
          status: { ne: "draft" }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      limit: 20
      )
      {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            updateDate(formatString: "YYYY/MM/DD")
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
