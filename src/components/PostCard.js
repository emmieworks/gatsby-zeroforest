import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Category from "../components/CategoryCard"

const Wrapper = styled.article`
  margin-bottom: var(--smallMargin);
  padding-bottom: var(--smallMargin);
  border-bottom: 1px dashed var(--lightGray);
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
    font-size: 1.1rem;
    padding-bottom: 15px;
    a{
      text-decoration:none;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    color: var(--primary);
  }
  p {
    line-height: 1.8;
    padding-bottom: 20px;
    font-size: 1rem;
  }
  @media screen and (max-width: 780px) {
    .left{
      padding: 10px;
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
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 5px;
    padding: 3px 5px;
    text-decoration:none;
    margin-right:10px;
    &:before{
      content: '#';
    }
    &:hover{
      background-color: var(--primary);
      color: var(--white);
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