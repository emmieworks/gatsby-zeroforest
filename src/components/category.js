import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "../components/categoryimage"

const Wrapper = styled.div`
text-align:center;
  a{
    text-transform:uppercase;
    text-decoration:none;
    .category-text{
      color:var(--gray);
      font-size:0.6rem;
      letter-spacing:0;
    }
  }
`

const Category = ({name}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            categories {
              name
              slug
              image
            }
          }
        }
      }
    `
  )
  const category = site.siteMetadata.categories.find((cat) => cat.name === name)
  return (
    <Wrapper>
        <Link to={`/category/${category.slug}`}
          key={category.name} >
          <Image filename={category.image} alt={category.name}/>
          <span className="category-text pc">{category.name}</span>
        </Link>
    </Wrapper>
  )
}
export default Category