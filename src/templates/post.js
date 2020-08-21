import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import RelatedPosts from "../components/RelatedPosts"
import BlogMenu from "../components/BlogMenu"
import PostWrapper from "./postStyle"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const tableOfContens = data.markdownRemark.tableOfContents
  const tags = post.frontmatter.tags
      ? (post.frontmatter.tags.map(e => (
            <Link to={`/tags/${e}/`.toLowerCase()} className="tag" key={e}>
              {e}
            </Link>
          )))
      : ""
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
            <span>Published: {post.frontmatter.date}</span>
            {post.frontmatter.updateDate && <span> | Updated :{post.frontmatter.updateDate}</span>}
            </div>
            {tags}
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
      <BlogMenu />
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
        date(formatString: "YYYY/MM/DD")
        updateDate(formatString: "YYYY/MM/DD")
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
