import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import {FaPinterest, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: var(--middleMargin);
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

const SectionTitle = styled.h2`
  color:var(--secondary);
  width: 100%;
  font-size: 1.2rem;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: var(--middleMargin);
  margin-bottom: var(--middleMargin);
  font-weight: 600;
  width: 100%;
  border-top: 1px solid var(--secondary);
  border-bottom: 1px solid var(--secondary);
`

const SubTitle = styled.h3`
  color:var(--secondary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: var(--middleMargin);
  margin-bottom: var(--middleMargin);
  padding: 7px 0 7px 15px;
  border-bottom: 1px solid var(--secondary);
`

const ProfileSection = styled.section`
  .flex{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
    padding:2rem auto;

    @media screen and (max-width: 780px) {
      flex-direction :column;
      justify-content:center;
    }

    p{
      margin: 30px auto;
    }
    figure{
      max-width: 100%;
      width: 180px;
      height: 180px;
    }
    .name{
      font-family: 'allura', cursive;
      font-size: 2.4rem;
      margin: 1rem;
    }
    .desc{
      margin: 1rem;
    }
  }
`
const BorderBox = styled.div`
    position: relative;
    border: 1px solid var(--primary);
    border-radius: 6px;
    padding: 10px 30px;
    margin: 30px;
    font-size: 0.8rem;

    span{
      position: absolute;
      top: -12px;
      left: 10px;
      padding: 5px 20px;
      background-color: var(--primary);
      border-radius: 4px;
      color: var(--white);
      line-height: 1;
      font-size: 0.9rem;
    }
    ul{
      margin: 0 10px;
      li{
        margin-top: 10px;
      }
    }
`

const SNS = styled.div`
  p{
    margin: 30px;
  }
  ul{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px;
    @media screen and (max-width: 780px) {
      flex-direction: row;
      justify-content: center;
    }
    font-size:20px;
    list-style: none;
    li{
      padding-right: 20px;
      &:hover{
        opacity: 60%;
    }
  }
`
const WorkSection = styled.section`
    width:var(--width);
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 780px) {
      max-width:90vw;
      width:90vw;
    }

  .flex{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem auto;

    @media screen and (max-width: 780px) {
      flex-direction :column;
      justify-content:center;
    }
    figure{
      max-width: 100%;
      width: 500px;
      height: auto;
    }
    .desc{
      margin: 1rem 2rem;
    }
    p{
      margin: 30px auto;
    }
    ul{
      margin: 30px auto;
      li{
        margin-left: 30px;
      }
    }
  }
  .reverse{
    flex-direction: row-reverse;
    @media screen and (max-width: 780px) {
      flex-direction :column;
    }
  }
`

const HPSection = styled.section`
  .flex{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem auto;

    @media screen and (max-width: 780px) {
      flex-direction :column;
      justify-content:center;
    }
    figure{
      max-width: 100%;
      width: 500px;
      height: auto;
    }
    .desc{
      margin: 1rem 2rem;
    }
    p{
      margin: 30px auto;
    }
  }
  .reverse{
    flex-direction: row-reverse;
  }
  ul{
    margin: 30px auto;
    li{
      margin-left: 30px;
    }
  }
`

const About = ({data, location}) => {
  const { author, social } = data.site.siteMetadata
  return (
    <Layout>
    <SEO
      title = "About"
      description = "作ったもの＆学習記事を掲載しています"
      pagepath = {location.pathname}
      type = "article"
    />
      <PageTitle>About</PageTitle>
      <ProfileSection className = "container">
        <SectionTitle>自己紹介</SectionTitle>
        <div className="flex">
          <figure>
            <Img
              fluid={data.profile.childImageSharp.fluid}
              alt={author.name}
            />
          </figure>
          <div className="desc">
            <span className="name">Emi</span>
            <p>東京在住のエンジニアです。</p>
            <p>学生の頃から、独学でホームページを作ったり、プログラミングで遊ぶのが好きでした。</p>
            <p>大学でコンピュータサイエンスを学んだ後、企業でシステムエンジニア・コンサルタントとして働いていました。<br />
            大規模なシステムよりも、目の前の人が喜ぶものを、ていねいに作っていきたいと思い、働き方を見直すことに。</p>
            <p>その後、趣味で作っていたブログをきっかけにお仕事をいただくようになり、2017年よりフリーランスとして活動しています。</p>
            <p>ホームページだけでなく、Webアプリやデザインなど、思い描いたものを楽しく作れるように勉強をしています。</p>
          </div>
        </div>

        <BorderBox>
          <span>好きなもの</span>
          <ul>
            <li>プログラミング❤︎</li>
            <li>Webデザイン（アンティーク、水彩、手書きっぽいデザインが好き。）</li>
            <li>手芸</li>
            <li>ピアノ</li>
            <li>漫画・ゲーム</li>
            <li>手帳／文房具</li>
          </ul>
        </BorderBox>
        <SNS>
          <SubTitle>SNS</SubTitle>
          <ul>
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
                href={`https://www.instagram.com/${social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
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
            <li>
              <a
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
          <p>Webプログラミングや、デザインがテーマ。お気軽にお声がけください。</p>
        </SNS>
      </ProfileSection>
      <WorkSection className = "container">
        <SectionTitle>お仕事について</SectionTitle>
        <div className="flex">
          <figure>
            <Img
              fluid = {data.pc.childImageSharp.fluid}
              alt = "pc"
            />
          </figure>
          <div className="desc">
            <p>個人で活動されている方や中小企業のお客さまにWebサイト制作・運営サポートをしています。</p>
            <ul>
              <li>ホームページの制作</li>
              <li>Wordpressサイトの制作</li>
              <li>ブログカスタマイズ</li>
              <li>Wordpress使い方レッスン</li>
            </ul>
            <p>丁寧にヒアリングしながら、美しく使いやすいWebサイトを作ります。</p>
            <Link to="/service/" className="btn">Service</Link>
          </div>
        </div>
        <div className="flex reverse">
          <figure>
            <Img
              fluid={data.gallery.childImageSharp.fluid}
              alt="pc"
            />
          </figure>
          <div className="desc">
            <p>Galleryでは過去の制作物を紹介しています。</p>
            <p>女性らしい優しさが感じられる<br />
            シンプルで素朴なデザインが好きです。</p>
            <Link to="/gallery/" className="btn">Gallery</Link>
          </div>
        </div>
      </WorkSection>

      <HPSection className = "container">
        <SectionTitle>Zero Forestについて</SectionTitle>
        <div className="flex">
          <figure>
            <Img
              fluid = {data.logo.childImageSharp.fluid}
              alt = "logo"
            />
          </figure>
          <div className = "desc">
            <p>プログラミング・デザインをテーマに発信しています。</p>
            <p>コードを書いたりデザインするときに、自分で調べたり、学んだことを、後に活かせるように記録しています。</p>
            <ul>
              <li>プログラミングの学びを整理</li>
              <li>デザイン独学・練習</li>
              <li>読んだ本のまとめ</li>
              <li>活動記録</li>
            </ul>
            <p>後で振り返ったとき、私の興味の幅が広がり、成長が感じられる場所になるように願い、木をロゴにしました。</p>
          </div>
        </div>
        <SubTitle>よく読まれている記事</SubTitle>
        <BorderBox>
          <span>Programming</span>
          <ul>
            <li><Link to="/css-list-style/">箇条書きリストをおしゃれにするCSS10個【女性向け】</Link></li>
            <li><Link to="/css-blockquote/">【CSSコピペOK】おしゃれな引用blockquoteデザイン10選</Link></li>
            <li><Link to="/css-frame/">CSSで作れるシンプルな飾り枠デザイン</Link></li>
            <li><Link to="/css-header/">CSSで作れるかわいいブログ見出しのデザイン</Link></li>
            <li><Link to="/wordpress-pulldown-menu//">【WordPress】プルダウンメニューのデザインを整える</Link></li>
            <li><Link to="/start-node-js/">【はじめてのNode.js】環境構築からプログラムを動かす手順をていねいに解説！</Link></li>
            <li><Link to="/node-js-mysql/">Node.js+ExpressでMySQLに接続して一覧表示する(Mac)</Link></li>
            <li><Link to="/install-sourcetree/">Sourcetreeのインストールと具体的な使い方〜gitでファイルをバージョン管理〜</Link></li>
          </ul>
        </BorderBox>
        <BorderBox>
          <span>Design</span>
          <ul>
            <li><Link to="/illustrator-calendar/">イラレでシステム手帳用のカレンダーを作ったよ</Link></li>
            <li><Link to="/illustrator-eyecatch-making/">Illustratorのアイキャッチ作り方</Link></li>
          </ul>
        </BorderBox>
        <BorderBox>
          <span>Column</span>
          <ul>
            <li><Link to="/freelance-marry/">個人事業主が結婚したときに行う手続き</Link></li>
            <li><Link to="/reading-journal/">【バレットジャーナル】私の読書ノートの書き方</Link></li>
          </ul>
        </BorderBox>

      </HPSection>
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
          instagram
          github
          pinterest
        }
      }
    }
    profile: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    pc: file(absolutePath: { regex: "/about-pc.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    gallery: file(absolutePath: { regex: "/about-gallery.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(absolutePath: { regex: "/logo-circle.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
