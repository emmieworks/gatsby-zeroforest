import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components"

const Wrapper = styled.article`
  padding:10px;
  margin:30px auto;
  background-color:var(--white);
  border-radius:10px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
  .relatedPostsTitle{
    color: var(--secondary);
    font-weight:600;
    margin-bottom:10px;
  }
  .relatedPost{
      font-size:0.8rem;
      padding:10px 10px;
      border-bottom:1px dashed var(--secondary);
      &:last-child {
        border-bottom: none;
      }
    a{
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`
const RelatedPosts = ({ title, category }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            fields: {collection: {eq: "blog"}}
            frontmatter: {
              status: { ne: "draft" }
            }
          }
          sort: { fields: [frontmatter___date], order: DESC }
        )
        {
          edges {
            node {
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                category
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => {
      const relatedPosts = data.allMarkdownRemark.edges.filter(edge => {
        if (edge.node.frontmatter.title === title) {
          return false;
        }
        if (edge.node.frontmatter.category === category) {
          return true;
        }
        return false;
      });
      if (!relatedPosts) {
        return null;
      }
      const relatedPosts5 = relatedPosts.slice(0, 5);

      return (
          <Wrapper>
            {relatedPosts5 ? (
              <p className="relatedPostsTitle">{category}の記事</p>
             ):(
             ""
             )}
             {relatedPosts5&&
                relatedPosts5.map(relatedPost => (
              <div className="relatedPost"
                key={relatedPost.node.frontmatter.title}>
                <Link
                  to={relatedPost.node.fields.slug}
                  key={relatedPost.node.frontmatter.title}
                >
                {relatedPost.node.frontmatter.title}
                </Link>
              </div>
            ))}
        </Wrapper>
      );
    }}
  />
);

export default RelatedPosts