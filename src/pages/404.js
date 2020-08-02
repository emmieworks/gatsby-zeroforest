import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
       title="404: Not Found"
       url ={location.pathname}
       />
      <h1>お探しの記事が見つかりませんでした</h1>
      <p>申し訳ありませんがアクセスしようとした記事は削除されたかURLが変更されています。</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
