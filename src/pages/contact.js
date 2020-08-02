import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Contact = ({data, location}) => {
  return (
    <Layout>
    <SEO
      title="お問い合わせ"
      pagepath={location.pathname}
    />
    <iframe title="Contact" src="https://docs.google.com/forms/d/e/1FAIpQLSeBAq5yTiHtB7OBg4FbyOdgGlT1UUKsFN7U91WWnJH1raOlQQ/viewform?embedded=true" width="100%" height="1000px" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </Layout>
  )
}
export default Contact
