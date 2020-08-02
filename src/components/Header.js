import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.header`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content:center;
  align-items: center;
  margin-bottom: 3rem;

  .logo{
    padding: 20px;
  }

  .navContainer{
    margin-left: auto;
  }

  .navList{
    display: flex;
    flex-flow:wrap;
    justify-content: center;
    padding:0;
    list-style:none;
    li{
        letter-spacing:0.05em;
        background:none;
        padding:7px 14px 10px;
    }
    a{
      text-transform:uppercase;
      text-decoration:none;
      &:active{
        text-decoration:underline;
      }
      &:hover{
        opacity:0.6;
      }
    }
  }
  @media screen and (max-width: 780px) {
    max-width:90vw;
    width:90vw;
  }
`

const Header = props => {
  const data = useStaticQuery(graphql`
  query{
    logo:file(relativePath: {eq: "logo-circle.png"}) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }`)
  return (
    <Wrapper>
      <Link to={`/`} className="logo" >
        <Img
          fixed={data.logo.childImageSharp.fixed}
          alt={data.site.siteMetadata.title}
         />
      </Link>
      <nav className="navContainer pc">
        <ul className="navList">
          <li><Link to ="/" activeClassName="active">Home</Link></li>
          <li><Link to ="/about/" activeClassName="active">About</Link></li>
          <li><Link to ="/blog/" activeClassName="active">Blog</Link></li>
          <li><Link to ="/contact/" activeClassName="active">Contact</Link></li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Header
