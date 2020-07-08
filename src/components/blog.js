import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { rgba } from "polished"
import { colors } from "../style/GlobalStyle"

const BlogWrapper = styled.article`
  margin-bottom: 2rem;
  padding-bottom:2rem;
  border-bottom: 1px dashed ${rgba(colors.secondary, 0.3)};
  &:last-child {
    border-bottom: none;
  }
  .info {
    display: flex;
    justify-content: space-between;
    color:var(--primary);
  }
  p {
    line-height: 1.8;
    padding: 15px 0 25px 0;
    font-size: 0.95rem;
  }
  @media screen and (max-width: 780px) {
    margin-bottom: 25px;
    padding-bottom: 25px;
    .info {
      flex-direction: column;
      .date {
        margin-bottom: 10px;
      }
    }
  }
  .tag{
    font-size:0.8rem;
    margin-right:10px;
    color:var(--primary);
    border: 1px solid var(--primary);
    border-radius:5px;
    padding: 3px 5px;
    text-decoration:none;
    &:hover{
      background-color: var(--primary);
      color:var(--white);
    }

  }
`

const BlogComponent = props => {
  const tags = props.tags
      ? (props.tags.map(e => (
            <Link to={`/tags/${e}/`.toLowerCase()} className="tag" key={e}>
              {e}
            </Link>
          )))
      : ""
  return (
    <BlogWrapper key={props.slug}>
      <header>
        <h3>
          <Link to={props.slug}>
            {props.title}
          </Link>
        </h3>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: props.description || props.excerpt,
          }}
        />
      </section>
      <div className="info">
        <small className="date">{props.date}</small>
        <div>{tags}</div>
      </div>
    </BlogWrapper>
  )
}
export default BlogComponent