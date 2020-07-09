import React from "react"
import { graphql, Link} from "gatsby"

import Blog from "../components/blog"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPageTemplate = ({ data, location,pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog"
        url ={location.pathname}
        />

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
        {!pageContext.isFirst &&(
          <li>
            <Link
              to={ pageContext.currentPage === 2
                    ? `/blog/`
                    : `/blog/${pageContext.currentPage -1}/`
                }
              rel="prev"
              style={{textDecoration:`none`}}
            >
                ← 前のページ
              </Link>
          </li>
        )}
        {!pageContext.isLast &&(
          <li>
              <Link
                to={`/blog/${pageContext.currentPage +1}/`}
                rel="next"
                style={{textDecoration:`none`}}
              >
                次のページ →
              </Link>
          </li>
        )}
        </ul>
      </nav>
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