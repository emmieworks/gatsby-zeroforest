import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Postcard from "../components/PostCard"
import BlogMenu from "../components/BlogMenu"

const MenuSection = styled.section`
  background-color: var(--white);

  padding-top: 30px;
  padding-bottom: 30px;
  margin: 60px auto;

  .container{
    width:var(--width);
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 780px) {
      max-width:90vw;
      width:90vw;
    }
  }

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
      margin: 30px auto;
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
  .gallery{
    align-content: center;
    text-align: right;
    @media screen and (max-width: 780px) {
      text-align: center;
    }
  }
  .gallery .image span{
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
    margin-bottom: 30px;
  }

  width:var(--width);
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 780px) {
    max-width:90vw;
    width:90vw;
  }
`

const Index = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO location={location} title="Home" />
      <MenuSection>
      <div className="container">
        <div className="flex service">
          <div className="image">
            <figure>
              <Img
                fluid={data.service.childImageSharp.fluid}
                alt="service"
              />
            </figure>
            <span>Sevice</span>
          </div>
          <div className="text">
            <p>ホームページやブログを作ったり、WordPressのレクチャーをしています。<br />一人ひとりのスタイル・イメージに合わせて、オリジナルデザインで、長く使い続けられるサイトをお作りします。</p>
            <Link to="/service/" className="btn">service</Link>
          </div>
        </div>
        <div className="flex reverse gallery">
          <div className="image">
            <figure>
              <Img
                fluid={data.gallery.childImageSharp.fluid}
                alt="gallery"
              />
            </figure>
            <span>Gallery</span>
          </div>
          <div className="text">
          <p>作ったもののご紹介。 <br />
          女性らしい優しさが感じられる<br />
          シンプルで素朴なデザインが好きです。</p>
          <Link to="/gallery/" className="btn">gallery</Link>
          </div>
        </div>
        </div>
      </MenuSection>

      <BlogSection>
        <SectionTitle>Blog</SectionTitle>
        <p className="desc">Web制作／デザインをテーマに発信しています</p>
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
          }
        }
      }
    }
    service: file(absolutePath: { regex: "/top-service.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    gallery: file(absolutePath: { regex: "/top-gallery.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
