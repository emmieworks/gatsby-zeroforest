import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  padding: 10px;
  font-family: allura, cursive;
  &:after{
    position: absolute;
    bottom: 10px;
    left: calc(50% - 30px);
    width: 60px;
    height: 1px;
    content: '';
    border-radius: 3px;
    background: var(--gray);
  }
`

const SectionTitle = styled.h2`
  color:var(--secondary);
  width: 100%;
  font-size: 1.2rem;
  margin-top: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 60px;
  font-weight: 600;
  width: 100%;
  border-top: 1px solid var(--secondary);
  border-bottom: 1px solid var(--secondary);
`

const SubTitle = styled.h3`
  color:var(--secondary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 7px 0 7px 15px;
  border-bottom: 1px solid var(--secondary);
`

const MenuSection = styled.section`

  width:var(--width);
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 780px) {
    max-width:90vw;
    width:90vw;
  }

  p{
    margin: 30px auto;
  }
  .container{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-around;
    padding: 2rem auto;

    @media screen and (max-width: 780px) {
      flex-direction :column;
      justify-content:center;
    }

    .image{
      flex: 1;
      figure{
        max-width: 100%;
        width: 400px;
        height: auto;
        margin: 30px auto;
      }
    }

    .plan{
      flex: 1;
      margin: 30px 30px;
      @media screen and (max-width: 780px) {
        margin: 30px 0;
      }
      padding: 20px 30px;
      border: 1px solid var(--secondary);
      border-radius: 3px;

      span{
        font-size: 1.2rem;
        color: var(--secondary);
        text-align: center;
        display: block;
      }
    }
  }
  ol, ul{
    margin-left: 10px;
    li{
      font-size: 0.9rem;
      padding-top: 10px;
    }
  }

  table{
    margin: 30px auto;
    th {
      color: var(--primary);
      background: var(--primaryPale);
      padding: 10px;
      width: 25%;
      font-size: 0.9rem;
    }
    td {
      padding: 10px 20px;
      background: var(--white);
      font-size: 0.8rem;
      line-height: 1.6;
    }
    td:last-child{
      width:25%;
      text-align: right;
      @media screen and (max-width: 780px) {
        width: 30%;
      }
    }
  }
  .box{
    background-color: var(--primaryLight);
    border-radius: 6px;
    padding: 30px;
    margin: 30px;
    font-size: 0.8rem;
    line-height: 1.8;
  }

`
const BorderBox = styled.div`
    border: 1px solid var(--primary);
    border-radius: 6px;
    padding: 30px;
    margin: 30px;
    @media screen and (max-width: 780px) {
      padding: 20px;
      margin: 30px 0;
    }
    font-size: 0.8rem;
    line-height: 1.8;

    span{
      padding: 5px 10px;
      background-color: var(--primary);
      border-radius: 4px;
      color: var(--white);
      line-height: 1em;
      font-size: 0.8rem;
    }

    ul{
      margin: 0 10px;
      li{
        margin-top: 10px;
      }
    }
`

const LESSON = styled.div`
  flex: 1;
  margin: 10px;
  padding: 10px;
  font-size: 0.8rem;
  border: 1px solid var(--secondary);
  .day,
  .title{
    text-align: center;
    color: var(--secondary);
  }
  .title{
    border-bottom: 1px solid var(--secondary);
    font-size: 1rem;
  }
  ol{
    margin: 30px;
    li{
      margin-top: 10px;
    }
  }
`
const STEP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;

  .circle{
    background-color: var(--primary);
    width: 100px;
    height: 100px;
    @media screen and (max-width: 780px) {
      width: 80px;
      height: 80px;
    }
    border-radius: 50%;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  .step{
    line-height: 1;
    @media screen and (max-width: 780px) {
      font-size: 12px;
    }
  }
  .no{
    font-size: 48px;
    line-height: 1;
    @media screen and (max-width: 780px) {
      font-size: 24px;
    }
  }
  .desc{
    width: 80%;
    margin-left : 30px;
    .task{
      color: var(--primary);
      font-weight: 600;
      line-height: 1;
    }
    p{
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`

const Service = ({data, location}) => {
  return (
    <Layout>
    <SEO
      title="About"
      description="作ったもの＆学習記事を掲載しています"
      pagepath={location.pathname}
    />
      <PageTitle>Service</PageTitle>
      <MenuSection>
        <SectionTitle>WordPressホームページ制作</SectionTitle>
        <p>WordPressを使うと、ホームページの修正をご自身で行えたり、ブログを運営していくことができます。</p>
        <p>お客さまの目的のやイメージをお伺いしながら、 コーポレートサイト・個人サイトやWEBメディア・ブログ、ランディングページなどの作成を承っております。</p>
        <div className="container">
          <div className="image">
            <figure>
              <Img
                fluid={data.web.childImageSharp.fluid}
                alt="SS"
              />
            </figure>
            <figure>
              <Img
                fluid={data.sitemap.childImageSharp.fluid}
                alt="sitemap"
              />
            </figure>
          </div>
         <div className="plan">
            <span>価格：300,000円（税抜）</span>
            <ol>
              <li>スケジュール・進行管理</li>
              <li>サイトマップ ・ワイヤーフレーム作成</li>
              <li>５ページ分のデザイン・プログラム作成</li>
              <ul>
                <li>トップページ</li>
                <li>ブログページ</li>
                <li>記事ページ</li>
                <li>その他2ページ</li>
              </ul>
              <li>お問い合わせフォーム</li>
              <li>モバイル／タブレット対応</li>
              <li>SEO対策</li>
              <li>WordPress導入・初期設定</li>
              <li>セキュリティ対策</li>
              <li>サーバー・ドメイン取得サポート</li>
              <li>Google Analytics設置</li>
              <li>Google Search Console設置</li>
              <li>WordPress使い方レクチャー</li>
            </ol>
          </div>
        </div>
        <SubTitle>オプション</SubTitle>
        <table>
          <tbody>
            <tr>
              <th>ページの追加</th>
              <td>5ページを超えた場合には、1ページごとにデザイン＋コーディング費用がかかります。（スマホ／タブレット対応）</td>
              <td>￥25,000<br/>/1P</td>
            </tr>
            <tr>
              <th>ロゴ・ヘッダー制作</th>
              <td>ホームページのデザインに合わせてロゴ／ヘッダーをデザインします。</td>
              <td>￥10,000~</td>
            </tr>
            <tr>
              <th>機能追加</th>
              <td>会員限定ページやスケジュール予約機能など、基本のWordPressテーマにはない機能を追加します。</td>
              <td>￥10,000~</td>
            </tr>
            <tr>
              <th>ホームページのリニューアル</th>
              <td>現在運営中のホームページやブログのリニューアル、無料ブログサービスからWordPressへの変更の場合は、現在の状況を確認させていただいた上で、ご提案させていただきます。</td>
              <td>要見積もり</td>
            </tr>
            <tr>
              <th>運用保守</th>
              <td>データのバックアップ、更新システムのメンテナンスをいたします。<br />ページのテキスト／画像の部分的な差し替えもできます。</td>
              <td>￥3,000円<br/>/1ヶ月</td>
            </tr>
            <tr>
              <th>公開後のページ追加／更新</th>
              <td>新しいページをデザイン／作成したり、既存のページのレイアウトや内容を更新します。</td>
              <td>￥10,000〜<br/>/1ヶ月</td>
            </tr>
            <tr>
              <th>使い方レクチャー</th>
              <td>公開後、時間が経って操作方法が分からなくなった場合、運営をしていて疑問が出てきた場合などに、ご相談いただけます。</td>
              <td>￥5,000<br/>/1時間</td>
            </tr>
          </tbody>
        </table>
        <SubTitle>制作の流れ</SubTitle>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">1</div>
          </div>
          <div className="desc">
            <span className="task">お問い合わせ</span>
            <p>お問い合わせフォームよりご連絡くださいませ。詳しいご案内をメールにてお知らせいたします。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">2</div>
          </div>
          <div className="desc">
            <span className="task">ヒアリング（Zoomで1時間ほど）</span>
            <p>ホームページ制作の進め方についてご説明をいたします。<br/>お見積もりをお出しするため、サイトの概要や希望納期などをお伺いいたします。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">3</div>
          </div>
          <div className="desc">
            <span className="task">サイトのご提案（サイトマップ ／ワイヤーフレーム作成）</span>
            <p>お話をしながら、ホームページの概要やおおまかなデザインを決めていきます。<br />提案内容をご確認いただき、問題なければ、ここで正式にご契約となります。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">4</div>
          </div>
          <div className="desc">
            <span className="task">原稿・素材のご準備</span>
            <p>お客さまにはホームページで使う文章、写真などの画像をご提出いただきます。<br />（画像素材はこちらで作成したり、有料素材を利用することもできます。）</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">5</div>
          </div>
          <div className="desc">
            <span className="task">デザインの確認</span>
            <p>原稿・素材が揃いましたらデザインに着手いたします。<br/>各ページのデザイン作成後、お客様にご確認いただきます。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">6</div>
          </div>
          <div className="desc">
            <span className="task">コーディング</span>
            <p>確定したデザインを元に、ホームページを作成します。また、WordPressのセットアップを行います。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">7</div>
          </div>
          <div className="desc">
            <span className="task">動作確認・検証</span>
            <p>こちらで動作を検証後、お客さまにもホームページの表示内容や動作を確認をしていただきます。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">8</div>
          </div>
          <div className="desc">
            <span className="task">公開・納品</span>
            <p>サーバーへデータをアップロードします。<br />
            ZoomでWordPressの使い方と、アフターサポートについて説明させていただきます。</p>
          </div>
        </STEP>

        <BorderBox>
          <span>制作期間について</span>
          <p>ホームページ作成には、約３ヶ月程度の期間をいただいております。<br />
          1人でデザインからコーディングまで担当しているため、ご依頼内容や他案件との兼ね合いによっては、それ以上の期間がかかる場合もございます。納期に余裕をもってお申し込みいただけると幸いです。</p>

          <span>料金の支払いについて</span>
          <p>銀行振り込みによる一括払いもしくはペイパルでの支払いが可能です。（振込にかかる手数料はご負担くださいませ）</p>

          <span>デザインについて</span>
          <p>ホームページ内で使うロゴやヘッダー、アイコンなどの素材は、イラストや写真素材を用いて制作しています。こちらで制作できる範囲でのデザインになります。<br />
          特にこだわったデザインが必要な場合には、ご相談の上、専門のデザイナーさんやイラストレーターさんに依頼させていただきます。</p>
        </BorderBox>
      </MenuSection>

      <MenuSection>
        <SectionTitle>ブログのカスタマイズ</SectionTitle>
        <p>アメブロ／はてなブログなど無料ブログ、WordPressのテンプレートをデザインします。</p>
        <p>ブログサービスによって、カスタマイズできる範囲が異なりますので、まずはお気軽にご相談ください</p>
        <div className="container">
          <div className="image">
            <figure>
              <Img
                fluid={data.blog.childImageSharp.fluid}
                alt="Blog"
              />
            </figure>
          </div>
         <div className="plan">
            <span>カスタマイズ例</span>
            <ol>
              <li>背景</li>
              <li>ヘッダー</li>
              <li>グローバルナビゲーション</li>
              <li>メッセージボード</li>
              <li>バナー</li>
              <li>サイドバー見出しデザイン</li>
              <li>記事タイトルのデザイン</li>
              <li>記事内の装飾（飾り枠、マーカー、リスト、引用など）</li>
            </ol>
          </div>
        </div>
        <SubTitle>価格</SubTitle>
        <table>
          <tbody>
            <tr>
              <th>ブログカスタマイズ</th>
              <td>アメブロ／はてなブログなどの無料ブログサービスのテンプレートをカスタマイズします</td>
              <td>￥30,000</td>
            </tr>
            <tr>
              <th>WordPressテーマのカスタマイズ</th>
              <td>すでにお使いのWordPressでデザインのカスタマイズ、必要な機能の追加などを行います。</td>
              <td>￥50,000~</td>
            </tr>
          </tbody>
        </table>
        <SubTitle>制作の流れ</SubTitle>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">1</div>
          </div>
          <div className="desc">
            <span className="task">お問い合わせ</span>
            <p>お問い合わせフォームよりご連絡くださいませ。詳しいご案内をメールにてお知らせいたします。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">2</div>
          </div>
          <div className="desc">
            <span className="task">ヒアリング（Zoomで1時間ほど）</span>
            <p>はじめに、メールでご要望をお伺いします。<br/>
            ご利用ブログサービス／ご希望の納期／イメージしている雰囲気／ご使用になりたい画像など</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">3</div>
          </div>
          <div className="desc">
            <span className="task">デザイン制作</span>
            <p>ご入金確認後、デザイン案を作成します。<br />
            打ち合わせでイメージをすり合わせていきます。</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">4</div>
          </div>
          <div className="desc">
            <span className="task">デザインのご確認</span>
            <p>各パーツのデザインをご確認いただきます。（修正は2回まで無料）</p>
          </div>
        </STEP>
        <STEP>
          <div className="circle">
            <div className="step">STEP</div>
            <div className="no">5</div>
          </div>
          <div className="desc">
            <span className="task">納品</span>
            <p>ご希望の日にちを伺い、お客様のブログにデザインを設定します</p>
          </div>
        </STEP>
      </MenuSection>

      <MenuSection>
        <SectionTitle>個人レクチャー・相談</SectionTitle>
          <figure>
            <Img
              fluid={data.lesson.childImageSharp.fluid}
              alt="lesson"
            />
          </figure>
          <p>WordPressの操作レクチャー、ホームページの運営相談を行います。</p>
        <SubTitle>WordPressスタートアップ　個人レッスン</SubTitle>
        <p>WordPressを使ってホームページやブログを作るレッスンです。</p>
        <p>ご自身で手を動かしながら、実践的なWordPressの使い方・ホームページの運営方法をマスターできます。
        レッスン後には、ご自分のホームページ／ブログを育てていけるようになります。</p>
        <div className="box">
          <ul>
            <li>30,000円（税抜）（2時間×２日）</li>
            <li>Zoomのビデオ通話、画面共有を使って行います</li>
            <li>WordPress運営には、以下の費用がかかります。</li>
            <ul>
              <li>サーバー費（初期費用3000円程度、月額1,000円程度）</li>
              <li>ドメイン費（年間1000円程度〜）</li>
              <li>お好みのテーマ購入費用</li>
            </ul>
          </ul>
        </div>

        <div className="container">
          <LESSON>
            <div className="day">DAY1</div>
            <div className="title">WordPressのセットアップ</div>
            <p>ホームページ／ブログの土台となるサーバー、ドメイン、WordPressソフトを用意します。空のウェブサイトを立ち上げて、WordPressの初期設定していきます。</p>
          <ol>
              <li>レンタルサーバー・ドメインの契約</li>
              <li>ドメインとサーバーの設定</li>
              <li>WordPressのインストール</li>
              <li>デザイン・テーマの相談</li>
              <li>WordPressの初期設定</li>
              <li>WordPressの管理画面の見方と操作方法</li>
          </ol>
          </LESSON>
          <LESSON>
            <div className="day">DAY2</div>
            <div className="title">デザインの設定</div>
            <p>テーマを入れて、ホームページの外観を設定します。<br />※ページの作成は時間内でできるとこまでの制作になるます</p>
            <ol>
              <li>テーマ・外観（デザイン）の設定</li>
              <li>必要なプラグインの設定</li>
              <li>ブログカテゴリーの設定</li>
              <li>サンプルページの作成※</li>
              <li>メニュー、ウィジットを設定して、ページの動線を作る</li>
              <li>分析ツール（Google Search Console, Google Analytics）の設置</li>
            </ol>
          </LESSON>
        </div>
        <p>基本は平日12時〜18時の間、それ以外にもスケジュールによって、ご都合の会う日時を調整させていただきます。</p>
        <p>お申し込み後、メールにてヒアリングさせていただきます。作りたいホームページのイメージや、特に知りたいことに合わせて、レッスンの内容を調整いたします。</p>
      </MenuSection>
      <MenuSection>
        <SectionTitle>過去の製作物</SectionTitle>
        <p>Galleryでは過去に作ったものを掲載しています。<br />
        シンプルで女性らしい優しいデザインが好きです。デザインテイストや制作物の傾向などをご確認ください。</p>
        <figure>
          <Img
            fluid={data.gallery.childImageSharp.fluid}
            alt="gallery"
          />
        </figure>
        <Link to="/gallery/" className="btn">Gallery</Link>
      </MenuSection>

      <MenuSection>
        <SectionTitle>お問い合わせ・お申し込みはこちら</SectionTitle>
      <iframe title="service" src="https://docs.google.com/forms/d/e/1FAIpQLScm__vRArbJDKch5wHyR_GwNVeJ84YEBZjwBJXM2_ffoFANGg/viewform?embedded=true" width="100%" height="1600" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </MenuSection>
    </Layout>
  )
}
export default Service

export const pageQuery = graphql`
  query {
    web: file(absolutePath: { regex: "/service-web.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    sitemap: file(absolutePath: { regex: "/service-sitemap.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    blog: file(absolutePath: { regex: "/service-blog.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    lesson: file(absolutePath: { regex: "/service-lesson.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
    gallery: file(absolutePath: { regex: "/service-gallery.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
