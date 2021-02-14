import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

const Wrapper = styled.div`
    margin-top: 1rem;
    padding: 1rem 0;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content:center;

    div{
      width: 30%;
      margin-top: var(--smallMargin);;
      margin-bottom: var(--smallMargin);;
      padding: 0 auto;
      font-family: 'Montserrat', sans-serif;
        a{
          text-decoration:none;
        }
    }
    ul{
      margin-top: 10px;
      border-left: 1px solid var(--secondary);
      padding-left: 30px;
      li{
        padding:8px;
      }
    }
    @media screen and (max-width: 780px) {
      flex-direction :column;
      div{
        width: 100%;
      }
    }
  }
`
const BlogMenu = () => {
  return (
    <Wrapper className="container">
      <div>
        <p>Content</p>
        <ul>
          <li><Link to ="/about/">About</Link></li>
          <li><Link to ="/service/">Service</Link></li>
          <li><Link to ="/category/webnote/">Web制作ノート</Link></li>
          <li><Link to ="/category/diary/">Diary</Link></li>
          <li><Link to ="/contact/">Contact</Link></li>
        </ul>
      </div>
      <div>
        <p><Link to ="/category/webnote/">WebNote</Link></p>
        <ul>
          <li><Link to ="/tags/wordpress/">WordPress</Link></li>
          <li><Link to ="/tags/html/css/">HTML/CSS</Link></li>
          <li><Link to ="/tags/gatsby/">Gatsby</Link></li>
          <li><Link to ="/tags/git/">git</Link></li>
          <li><Link to ="/tags/python/">python</Link></li>

        </ul>
      </div>
      <div>
        <p><Link to ="/category/diary/">Diary</Link></p>
        <ul>
          <li><Link to ="/tags/活動記録/">活動記録</Link></li>
          <li><Link to ="/tags/手帳/">手帳</Link></li>
          <li><Link to ="/tags/手芸/">手芸</Link></li>
        </ul>
      </div>
    </Wrapper>
    )
}
export default BlogMenu
