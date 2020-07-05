import React from "react"
import { Link} from "gatsby"

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
        margin-bottom: 7px;
      }
    }
  }
`
const Blog = props => {
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
        <small>{props.date}</small>
        <small>{props.tags}</small>
      </div>
    </BlogWrapper>
  )
}
export default Blog