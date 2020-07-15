import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rgba } from "polished"
import { colors } from "../style/GlobalStyle"
import Category from "../components/category"

const Wrapper = styled.article`
  margin-bottom: 2rem;
  padding-bottom:2rem;
  border-bottom: 1px dashed ${rgba(colors.secondary, 0.3)};
  &:last-child {
    border-bottom: none;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .left{
    padding:10px 30px;
  }
  .right{
    width:100%;
  }
  h3{
    padding-bottom:15px;
    a{
      text-decoration:none;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    color:var(--primary);
  }
  p {
    line-height: 1.8;
    padding-bottom:20px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 780px) {
    margin-bottom: 25px;
    padding-bottom: 25px;
    .left{
      padding:10px;
    }
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

const Postcard = props => {
  const tags = props.tags
      ? (props.tags.map(e => (
            <Link to={`/tags/${e}/`.toLowerCase()} className="tag" key={e}>
              {e}
            </Link>
          )))
      : ""

  return (
    <Wrapper key={props.slug}>
    <div className="left">
      <Category name= {props.category}/>
    </div>
    <div className="right">
      <h3>
          <Link to={props.slug}>
            {props.title}
          </Link>
      </h3>
      <section className="pc">
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
    </div>
    </Wrapper>
  )
}
export default Postcard