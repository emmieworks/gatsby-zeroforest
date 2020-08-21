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
        <p><Link to ="/category/programming/">Programming</Link></p>
        <ul>
          <li><Link to ="/tags/html/">HTML</Link></li>
          <li><Link to ="/tags/css/">CSS</Link></li>
          <li><Link to ="/tags/javascript/">JavaScript</Link></li>
          <li><Link to ="/category/wordpress/">WordPress</Link></li>
          <li><Link to ="/tags/gatsby/">Gatsby</Link></li>
          <li><Link to ="/tags/git/">git</Link></li>
        </ul>
      </div>
      <div>
        <p><Link to ="/category/design/">Design</Link></p>
        <ul>
          <li><Link to ="/tags/illustrator/">illustrator</Link></li>
          <li><Link to ="/tags/デザイン独学/">デザイン独学</Link></li>
        </ul>
      </div>
      <div>
        <p><Link to ="/category/column/">Column</Link></p>
        <ul>
          <li><Link to ="/tags/活動記録/">活動記録</Link></li>
          <li><Link to ="/tags/journal/">Journal</Link></li>
          <li><Link to ="/tags/私の愛用品/">私の愛用品</Link></li>
        </ul>
      </div>
    </Wrapper>
    )
}
export default BlogMenu
