import React from "react"
import styled from "styled-components"
import { Link} from "gatsby"

const FooterWrapper = styled.footer`
  margin-top:1rem;
  padding:1rem 0;
  border-top:1px solid var(--secondary);

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  @media screen and (max-width: 780px) {
    flex-direction :column;
    justify-content:center;
  }

  .footerMenu{
    margin-left: auto;
    a{
      text-decoration:none;
    }
    @media screen and (max-width: 780px) {
      margin-left:auto;
      margin-top:1rem;
    }
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
        padding:8px;
    }
    a{
      text-transform:uppercase;
      text-decoration:none;
      &:hover{
        opacity:0.7;
      }
    }
  }
`
const Footer = () => {
  return (
    <FooterWrapper>
    <p>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
    <nav className="footerMenu">
        <ul className="navList">
          <li><Link to ="/"  className="sp">Home</Link></li>
          <li><Link to ="/about/" className="sp">About</Link></li>
          <li><Link to ="/blog/" className="sp">Blog</Link></li>
          <li><Link to ="/contact/" className="sp">Contact</Link></li>
          <li><Link to ="/site-policy/">Site Policy</Link></li>
        </ul>
      </nav>
    </FooterWrapper>
    )
}
export default Footer
