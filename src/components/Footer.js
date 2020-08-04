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
  justify-content:space-around;
  align-items: center;

  div{
    margin-left: auto;
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
    <div><Link to ="/site-policy/">Site Policy</Link></div>
    </FooterWrapper>
    )
}
export default Footer