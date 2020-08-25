import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--secondary);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: var(--secondary);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    color: var(--white);
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    :after {
      background: var(--white);
    }
    :hover {
      color: var(--white);
    }
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to ="/" activeClassName="active">Home</NavItem>
      <NavItem to ="/about/" activeClassName="active">About</NavItem>
      <NavItem to ="/service/" activeClassName="active">Service</NavItem>
      <NavItem to ="/blog/" activeClassName="active">Blog</NavItem>
      <NavItem to ="/contact/" activeClassName="active">Contact</NavItem>
    </>
  )
}

export default NavbarLinks