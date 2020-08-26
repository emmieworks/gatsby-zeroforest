import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout>
      <SEO
       title="404 Not Found"
       url={location.pathname}
       type="article"
       />
      <h1>お探しの記事が見つかりませんでした</h1>
      <p>申し訳ありませんがアクセスしようとした記事は削除されたかURLが変更されています。</p>
    </Layout>
  )
}

export default NotFoundPage