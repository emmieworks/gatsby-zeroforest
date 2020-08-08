import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 100px;

  width:var(--width);
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 780px) {
    max-width:90vw;
    width:90vw;
  }

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
      background: var(--gray);
    }
  }

  .container{
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  article{
    margin: 10px 0 30px 0;
    text-align: center;
    overflow:   hidden;
    position:   relative;
    width: 240px;
    height: 150px;
    a{
      text-decoration: none;
    }

    h3{
      font-size: 16px;
      color: #fff;
      padding: 10px;
    }
    img{
      max-width: 100%;
      height: auto;
    }

    .mask {
      width:      100%;
      height:     100%;
      position:   absolute; /* 絶対位置指定 */
      top: 0;
      left: 0;
      opacity: 0;  /* マスクを表示しない */
      background-color: rgba(0,0,0,0.6);  /* マスクは半透明 */
      -webkit-transition: all 0.5s ease;
      transition:   all 0.5s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover .mask {
      opacity:    1;  /* マスクを表示する */
    }
  }

  @media screen and (max-width: 780px) {
    article{
      width: 100%;
      height: auto;
      .mask {
        opacity: 1;  /* マスクを表示する */
      }
    }
  }
`

const Gallery = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO location={location} title="Gallery" />
      <Wrapper>
      <h1>Gallery</h1>
        <div className="container">
        {posts.map(({ node }) => {
          return (
            <article key={node.fields.slug}>
              <Link to={`/gallery${node.fields.slug}`}>
                {node.frontmatter.featured && (
                 <Img
                    className="featured"
                    fluid={node.frontmatter.featured.childImageSharp.fluid}
                    alt={node.frontmatter.title}
                     />
                )}
                <div className="mask">
                  <h3>{node.frontmatter.title}</h3>
                </div>
              </Link>
            </article>
          )
        })}
        </div>
      </Wrapper>
    </Layout>
  )
}
export default Gallery

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {collection: {eq: "gallery"}}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      )
      {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            category
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
