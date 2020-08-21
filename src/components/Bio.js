/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {FaPinterest, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
            github
            pinterest
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: 30,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: 15,
          marginBottom: 0,
          minWidth: 80,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `80%`,
        }}
      />
      <div>
        <p>Written by <strong>{author.name}</strong>{` `}
        <a
          style={{marginRight:10}}
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          >
          <FaTwitter />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://www.instagram.com/${social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://pinterest.com/${social.pinterest}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a></p>
        <p>{author.summary}</p>
      </div>
    </div>
  )
}

export default Bio
