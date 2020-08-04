import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import {FaPinterest, FaGithub, FaTwitter } from "react-icons/fa"

const Wrapper = styled.div`
  .profileContainer{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:2rem auto;
    @media screen and (max-width: 780px) {
      flex-direction :column;
      justify-content:center;
    }
  }
  .profileImage{
    width:180px;
    height:180px;
    border-radius:10px;
  }
  .profileName{
    font-family:'allura', cursive;
    font-size:24px;
    margin:1rem;
    @media screen and (max-width: 780px) {
      margin:1rem;
    }
  }
  .profileDesc{
    margin:1rem;

    @include mq('sp') {
      margin:1rem;
    }
  }
  h1{
    font-family:'allura', cursive;
    margin:2rem auto;
  }
  h2{
    font-family:'allura', cursive;
    margin:1rem auto;
  }
  .list{
    margin-left:30px;
  }
  .sns{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top:10px;
    @media screen and (max-width: 780px) {
      flex-direction :row;
      justify-content: center;
    }
    font-size:20px;
    list-style: none;
    li{
      padding-right:20px;
      &:hover{
        opacity:60%;
    }
  }
`

const About = ({data, location}) => {
  const { author, social } = data.site.siteMetadata
  return (
    <Layout>
    <SEO
      title="About"
      description="作ったもの＆学習記事を掲載しています"
      pagepath={location.pathname}
    />
    <Wrapper>
      <h1>About</h1>
      <div className="profileContainer">
        <Img
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          className="profileImage"
        />
        <div>
          <span className="profileName">Emi</span>
          <div className="profileDesc">
            <p>マイペースにプログラミング。</p>
            <p>作ったものを公開したり、Web制作で学んだことを記録しています。</p>
            <p>ときどき趣味の手帳や文房具、手芸についても綴っています。</p>
            <ul className="sns">
              <li>
                <a
                  href={`https://twitter.com/${social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href={`https://github.com/${social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href={`https://pinterest.com/${social.pinterest}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Love</h2>
        <ul className="list">
            <li>プログラミング❤︎</li>
            <li>Webデザイン（アンティーク、水彩、手書きっぽいデザインが好き。）</li>
            <li>手芸</li>
            <li>ピアノ</li>
            <li>漫画・ゲーム</li>
            <li>手帳／文房具</li>
          </ul>
      <h2>Skills</h2>
        <ul className="list">
          <li>PHP</li>
          <li>Ruby on Rails</li>
          <li>HTML/CSS</li>
          <li>Sass</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Java</li>
          <li>Adobe XD</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
        </ul>
      </Wrapper>
    </Layout>
  )
}
export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author{
          name
        }
        title
        social {
          twitter
          github
          pinterest
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
