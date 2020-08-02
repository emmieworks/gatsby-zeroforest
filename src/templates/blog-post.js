import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RelatedPosts from "../components/relatedposts"

import PostWrapper from "./blogPostStyle"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
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
          <p className="date">
            {post.frontmatter.date}
          </p>
          <h1>
            {post.frontmatter.title}
          </h1>
        </header>
          {post.frontmatter.featured && (
          <Img
            fluid={post.frontmatter.featured.childImageSharp.fluid}
            alt={post.frontmatter.title}    />
            )}
        <div className="toc">
          <h4>目次</h4>
          <div
            dangerouslySetInnerHTML={{__html: tableOfContens}}
           />
         </div>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <RelatedPosts
          title = {post.frontmatter.title}
          category ={post.frontmatter.category} />
        <hr/>
        <footer>
          <Bio />
        </footer>
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </PostWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        description
        category
        tags
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
