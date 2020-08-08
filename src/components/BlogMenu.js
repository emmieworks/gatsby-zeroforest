import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

const Wrapper = styled.div`
    margin-top: 1rem;
    padding: 1rem 0;

    width:var(--width);
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 780px) {
      max-width:90vw;
      width:90vw;
    }

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content:center;

    div{
      width: 30%;
      margin: 30px auto;
      padding: 0 auto;
      font-family: 'Montserrat', sans-serif;
        a{
          text-decoration:none;
        }
    }
    ul{
      margin-top: 10px;
      border-left: 1px solid var(--secondary);
      li{
        padding:8px;
        margin-left: 30px;
      }
    }
    @media screen and (max-width: 780px) {
      flex-direction :column;
      div{
        width: 100%;
        margin-left: 30px;
      }
    }
  }
`
const BlogMenu = () => {
  return (
    <Wrapper>
      <div>
        <p><Link to ="/category/programming/">Programming</Link></p>
        <ul>
          <li><Link to ="/tags/html/">HTML</Link></li>
          <li><Link to ="/tags/css/">CSS</Link></li>
          <li><Link to ="/tags/javascript/">JavaScript</Link></li>
          <li><Link to ="/category/wordpress/">WordPress</Link></li>
          <li><Link to ="/tags/gatsby/">Gatsby</Link></li>
        </ul>
      </div>
      <div>
        <p><Link to ="/category/design/">Design</Link></p>
        <ul>
          <li><Link to ="/tags/illustrator/">illustrator</Link></li>
        </ul>
      </div>
      <div>
        <p><Link to ="/category/column/">Column</Link></p>
        <ul>
          <li><Link to ="/tags/おすすめツール/">おすすめツール</Link></li>
          <li><Link to ="/tags/活動記録/">活動記録</Link></li>
        </ul>
      </div>
    </Wrapper>
    )
}
export default BlogMenu
