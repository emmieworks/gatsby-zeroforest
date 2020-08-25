import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogMenu from "../components/BlogMenu"
import Img from "gatsby-image"

const PageTitle = styled.h1`
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

const Description = styled.p`
  text-align: center;
  margin-bottom: var(--middleMargin);
`

const Article = styled.article`
  margin-bottom: var(--smallMargin);
  padding-bottom: var(--smallMargin);
  border-bottom: 1px dashed var(--lightGray);
  &:last-child {
    border-bottom: none;
  }

  .flex{
    z-index:10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 780px) {
      flex-direction: column;
      .left, .right{
        width: 100%;
        max-width: 100%;
        flex: 1;
      }
    }
  }
  .left{
    flex: 2;
    position: relative;
  }
  .right{
    flex: 3;
    padding: 30px;
    @media screen and (max-width: 780px) {
      padding: 30px 0;
    }
  }
  .category{
    font-family: 'Allura', cursive;
    font-size: 1.8rem;
    position: absolute;
    color: var(--secondary);
    top: 0px;
    left: -20px;
    transform: rotate(-15deg);
    z-index: 10;
  }
  h3{
    font-size: 1.1rem;
    padding-bottom: 15px;
    a{
      text-decoration:none;
    }
  }
  p {
    font-size: 0.9rem;
    line-height: 1.8;
    padding-bottom: 15px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    color: var(--primary);
    @media screen and (max-width: 780px) {
      flex-direction: column;
      .date{
        margin-bottom: 10px;
      }
    }
  }
  .tag{
    font-size: 0.8rem;
    display: inline-block;
    color: var(--primary);
    text-decoration:none;
    transition: all 200ms ease-in;
    position: relative;

    &:not(:last-child):after {
     content: '/';
     padding: 0.5rem;
    }
  }
`

const Index = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO location = {location} title = "Home" />
      <div className = "container">
        <PageTitle>Blog</PageTitle>
        <Description>Web制作／デザインをテーマに発信しています</Description>
        {posts.map(({ node }) => {
          const tags = node.frontmatter.tags
          ? (node.frontmatter.tags.map(e => (
                <Link to={`/tags/${e}/`.toLowerCase()} className="tag" key={e}>
                  {e}
                </Link>
              )))
          : ""
          return (
            <Article key={node.fields.slug}>
              <div className="flex">
                <div className="left">
                  <div className="category">{node.frontmatter.category}</div>
                  <figure>
                    <Link to={node.fields.slug} className="link">
                    {node.frontmatter.featured ? (
                       <Img
                           fluid={node.frontmatter.featured.childImageSharp.fluid}
                           alt={node.frontmatter.title}
                        />
                      )
                      : <Img
                         fluid={data.noimage.childImageSharp.fluid}
                         alt={node.frontmatter.title}
                        />

                    }
                      </Link>
                  </figure>
                </div>
                <div className="right">
                  <h3>
                    <Link to={node.fields.slug} className="link">
                      {node.frontmatter.title}
                    </Link>
                  </h3>
                  <section className="pc">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                  <div className="info">
                    <small className="date">{node.frontmatter.date}</small>
                    <div>{tags}</div>
                  </div>
                </div>
              </div>
            </Article>

          )
        })}
        <Link to="/blog/" className="btn">SEE MORE</Link>
      </div>
      <BlogMenu />
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query {
    noimage:file(relativePath:{eq: "noimage.jpg"}){
      childImageSharp{
        fluid(maxWidth: 800){
          ...GatsbyImageSharpFluid
        }
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
      limit: 10
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
    }
  }
`
