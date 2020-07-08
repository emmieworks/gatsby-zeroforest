import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const Wrapper = styled.div`
  p {
    line-height: 1.8;
    margin: 20px 0;
  }
  h1 {
      font-size: 1.6rem;
      font-weight: 600;
      text-align: center;
      padding: 30px 0;
      margin:30px auto;
      color:var(--secondary);
  }
  h2 {
    color:var(--secondary);
    width: 100%;
    font-size: 1.2rem;
    margin-top: 60px;
    padding-top:10px;
    padding-bottom: 10px;
    margin-bottom: 30px;
    font-weight: 600;
    width: 100%;
    border-top: 1px solid var(--secondary);
    border-bottom: 1px solid var(--secondary);
  }
  h3 {
    color:var(--secondary);
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 50px;
    margin-bottom: 30px;
    padding: 7px 0 7px 15px;
    border-left: 3px double var(--secondary);
  }
`


const SitePolicy = () => {
  return (
    <Layout>
    <SEO title="Site Policy" />
    <Wrapper>
      <h1>サイトポリシー・免責事項</h1>
      <h2>掲載内容について</h2>
        <p>サイト内の内容、テキスト、画像についてのお問い合わせは、お問い合わせからお送りください。</p>
        <p>このサイトの記事を、掲載する場合は、引用元がわかるようにリンクを貼っていただけると嬉しいです。</p>

      <h2>個人情報について</h2>
      <h3>個人情報の利用目的</h3>
        <p>当ブログでは、メールでのお問い合わせ、メールマガジンへの登録などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。</p>

        <p>これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。</p>

        <h3>個人情報の第三者への開示</h3>
        <p>当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。</p>
        <p>・本人のご了解がある場合</p>
        <p>・法令等への協力のため、開示が必要となる場合</p>

        <h3>個人情報の開示、訂正、追加、削除、利用停止</h3>
        <p>ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。お問い合わせフォームからお知らせください。</p>

      <h2>アクセス解析ツールについて</h2>
        <p>このサイトでは、サイトの分析と改善のためにGoogleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>

        <p>Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にして、収集を拒否することもできますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはGoogle Analytics利用規約をご覧ください。</p>

        <h3>Google Adsenseについて</h3>
        <p>当サイトはGoogle及びGoogleのパートナー（第三者配信事業者）の提供する広告を設置しております。その広告配信にはCookieを使用し、当サイトへの過去のアクセス情報に基づいて広告を配信します。</p>

        <p>DoubleClick Cookie を使用することにより、GoogleやGoogleのパートナーは当サイトや他のサイトへのアクセス情報に基づいて、適切な広告を当サイト上でサイト利用者に表示できます。</p>

        <p>サイト利用者は下記のGoogleアカウントの広告設定ページで、インタレスト ベースでの広告掲載に使用される DoubleClick Cookie を無効にできます。また aboutads.infoのページにアクセスして頂き、インタレスト ベースでの広告掲載に使用される第三者配信事業者のCookieを無効にできます。</p>

        <p>その他、Googleの広告におけるCookieの取り扱い詳細については、Googleのポリシーと規約ページをご覧ください。</p>

      <h2>特定商取引法に基づく表記</h2>
        <p>当サイトは、アフィリエイトプログラムにより商品をご紹介致しております。
        アフィリエイトプログラムとは、商品及びサービスの提供元と業務提携を 結び商品やサービスを紹介するインターネット上のシステムです。従いまして、当サイトの商品は当サイトが販売している訳ではありません。</p>

        <p>実際に使ってみて、特におすすめできる商品、サービスのみを掲載しています。商品、サービスについては正直な感想を書いています。</p>

        <p>お客様ご要望の商品、お支払い等はリンク先の販売店と直接のお取引となりますので、特定商取引法に基づく表記につきましてはリンク先をご確認頂けますようお願い致します。</p>

        <p>商品の価格 商品の詳細 消費税 送料 在庫数等の詳細は時として変わる場合も御座います。</p>
        <p>また、返品・返金保証に関しましてもリンク先の販売元が保証するものです。当サイトだけではなくリンク 先のサイトも良くご確認頂けますようお願い致します。</p>

        <p>また、当サイトの掲載情報をご利用頂く場合には、お客様のご判断と責任におきましてご利用頂けますようお願い致します。当サイトでは、一切の責任を負いかねます事ご了承願います。</p>

        <p>尚、掲載商品に関するお問合せはリンク先に御座います企業宛までお願い致します。</p>
        <p>当サイト管理者側ではお答え致しかねます事、ご了承ください。</p>

      <h2>Amazonアソシエイトについて</h2>
        <p>このサイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
        <p>第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにクッキーを設定したりこれを認識したりする場合があります。</p>

      <h2>免責事項</h2>
        <p>このサイトのコンテンツ・情報には、私自身が個人的に調べたものです。可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。</p>

        <p>サイトの掲載情報をご利用頂く場合には、お客様のご判断と責任におきましてご利用頂けますようお願い致します。サイトの掲載内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>

        <p>このサイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</p>

      <h2>プライバシーポリシーの遵守</h2>
        <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。</p>

        <p>最新のプライバシーポリシーは常に本ページにて開示します。</p>
      </Wrapper>
    </Layout>
  )
}
export default SitePolicy