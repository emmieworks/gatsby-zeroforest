import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa"

const Wrapper = styled.nav`
  ul{
    display: flex;
    justify-content: space-between;
    align-items:center;
    list-style:none;
    li {
      padding: 10px 0px 15px 0px;
      font-size: 0.8rem;
    a {
      transition: 0.3s ease;
      display: flex;
      align-items:center;
      text-decoration: none;
      font-weight: 600;
      i {
        letter-spacing: 0.1rem;
        display: inline-block;
        padding:5px;
      }
    }
    @media screen and (max-width: 780px) {
      flex-direction: column;
    }
  }
`

const Pagenation = ({ numPages, currentPage, pathBase }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? pathBase : pathBase + (currentPage - 1).toString()
  const nextPage = pathBase + (currentPage + 1).toString()

  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
          {!isFirst ? (
            <Link
              to={prevPage}
              rel="prev"
            >
                <FaAngleDoubleLeft />
                <i>前のページ</i>
              </Link>
          ) : (
          ""
          )}
          </li>
          {Array.from({ length: numPages }, (_, i) =>
            i + 1 === currentPage ? (
              <li
                key ={`pagination-number${i + 1}`}
                className = "active"
              >
              {i + 1}
              </li>
            ) : (
              <li key ={`pagination-number${i + 1}`}>
                <Link
                 to = {pathBase + (i === 0 ? "" : i + 1)}>
                {i + 1}
                </Link>
              </li>
            )
          )}
          <li>
          {!isLast ? (
            <Link
              to={nextPage}
              rel="next"
            >
              <i>次のページ</i>
              <FaAngleDoubleRight />
            </Link>
          ) : (
          ""
          )}
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Pagenation
