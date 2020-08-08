import React from "react"
import styled from "styled-components"
import { Link} from "gatsby"

const Wrapper = styled.footer`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--secondary);

  .container{
    width:var(--width);
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 780px) {
      max-width:90vw;
      width:90vw;
    }
  }

  .flex{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content:space-around;
    align-items: center;
  }

  a{
    margin-left: auto;
  }
`
const Footer = () => {
  return (
    <Wrapper>
    <div className="container flex">
    <p>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
    <Link to ="/site-policy/">Site Policy</Link>
    </div>
    </Wrapper>
    )
}
export default Footer