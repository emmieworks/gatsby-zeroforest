import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogMenu from "../components/BlogMenu"
import Img from "gatsby-image"

const MenuSection = styled.section`
  background-color: var(--white);

  padding-top: var(--smallMargin);
  padding-bottom: var(--smallMargin);
  margin: var(--middleMargin) auto;

  .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
    padding: 2rem auto;

    @media screen and (max-width: 780px) {
      flex-direction :column;
      justify-content:center;
    }
  }
  .reverse{
    flex-direction :row-reverse;
    @media screen and (max-width: 780px) {
      flex-direction :column;
    }
  }
  .image{
    flex: 1;
    position: relative;
    figure{
      max-width: 100%;
      width: 300px;
      height: auto;
      margin: var(--smallMargin) auto;
    }
  }
  .text{
    flex: 1;
    max-width: 400px;
    font-size: 0.8rem;
    line-height: 2;
    margin: 30px 0px;
    padding: 20px;
  }
  .service{
    align-content: flex-end;
  }
  .service .image span{
    font-family: 'allura', cursive;
    font-size: 4rem;
    color: var(--secondary);
    position: absolute;
    top: 0%;
    left: 60%;
    display: block;
    transform: rotate(15deg);
  }
  .about{
    align-content: center;
    text-align: right;
    @media screen and (max-width: 780px) {
      text-align: center;
    }
  }
  .about .image span{
    font-family: 'allura', cursive;
    font-size: 4rem;
    color: var(--secondary);
    position: absolute;
    top: 10%;
    left: 0%;
    display: block;
    transform: rotate(-20deg);
  }
`

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
       <MenuSection>
        <div className="container">
          <div className = "flex about">
            <div className = "image">
              <figure>
                <Img
                  fluid = {data.about.childImageSharp.fluid}
                  alt = "about"
                />
              </figure>
              <span>About</span>
            </div>
            <div className = "text">
            <p>はじめましての方はこちらへ <br />
            自己紹介と、このサイトについてのご紹介です</p>
            <Link to = "/about/" className = "btn">about</Link>
            </div>
          </div>
          <div className = "flex reverse service">
            <div className = "image">
              <figure>
                <Img
                  fluid={data.service.childImageSharp.fluid}
                  alt="service"
                />
              </figure>
              <span>Sevice</span>
            </div>
            <div className = "text">
              <p>ホームページ制作やWordPressのレクチャーをしています。<br />
              一人ひとりに合わせたオリジナルデザインで、<br />
              大切に育てていける場所をお作りします。</p>
              <Link to = "/service/" className = "btn">service</Link>
            </div>
          </div>
        </div>
      </MenuSection>
      <section className = "container">
        <SectionTitle>Blog</SectionTitle>
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
      </section>
      <BlogMenu />
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query {
    service: file(absolutePath: { regex: "/top-service.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    about: file(absolutePath: { regex: "/top-about.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
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
