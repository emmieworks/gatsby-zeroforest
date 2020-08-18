---
title: Gatsbyブログの始め方
date: 2020-07-04T20:00:47+09:00
featured: icatch-20200620.jpg
category: Programming
tags:
  - Gatsby
status: published
---

ブログをWordPressからGatsbyに変えました。

## Gatsbyとは？

静的サイトジェネレーターという
WebサイトのHTMLファイルを生成してくれるツールです。

WordPressなどのCMSでは、データベースで記事を管理しています。
URLにアクセスされたときに、データベースから記事を取得して、HTMLを生成して表示させる仕組みです。

一方で、静的ジェネレーターは、コンパイル時にHTMLファイルをあらかじめ生成していきます。
URLにアクセスされた時には、生成してあったファイルを表示するだけなので、表示速度が早くなります。
サーバーやデータベースの管理も不要になるので、セキュリティリスクが低くなるようです。

## Gatsbyブログのメリット

1. サーバーが必要ないので、サーバー代0円

2. ブログ記事の更新履歴を管理できる

3. 画像の最適化表示も行ってくれる

4. ホームページの表示が早くなる


逆にデメリットとしては、
1. 大量の記事を保管するには向かない

2. 自分でプログラムを書く必要がある（gitやReact、GraphQLの知識が必要）


## Gatsby でのブログ作り

参考図書は、Gatsbyチュートリアルと本です。

<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="//af.moshimo.com/af/c/click?a_id=742757&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F" target="_blank" rel="nofollow" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3001/9784839973001.jpg?_ex=200x200" style="border: none;" /></a><img src="//i.moshimo.com/af/i/impression?a_id=742757&p_id=56&pc_id=56&pl_id=637" width="1" height="1" style="border:none;"></div><div class="booklink-info"><div class="booklink-name"><a href="//af.moshimo.com/af/c/click?a_id=742757&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F" target="_blank" rel="nofollow" >Webサイト高速化のための　静的サイトジェネレーター活用入門</a><img src="//i.moshimo.com/af/i/impression?a_id=742757&p_id=56&pc_id=56&pl_id=637" width="1" height="1" style="border:none;"><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">エビスコム マイナビ出版 2020年06月01日    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="//af.moshimo.com/af/c/click?a_id=742757&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F" target="_blank" rel="nofollow" >楽天ブックス</a><img src="//i.moshimo.com/af/i/impression?a_id=742757&p_id=56&pc_id=56&pl_id=637" width="1" height="1" style="border:none;"></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4839973008/filledfores07-22/" target="_blank" rel="nofollow" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=Web%E3%82%B5%E3%82%A4%E3%83%88%E9%AB%98%E9%80%9F%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%80%80%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E6%B4%BB%E7%94%A8%E5%85%A5%E9%96%80&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=filledfores07-22" target="_blank" rel="nofollow" >Kindle</a></div><div class="shoplinkseven"><a href="//af.moshimo.com/af/c/click?a_id=1082680&p_id=932&pc_id=1188&pl_id=12456&s_v=b5Rz2P0601xu&url=http%3A%2F%2F7net.omni7.jp%2Fsearch%2F%3FsearchKeywordFlg%3D1%26keyword%3D9784839973001" target="_blank" rel="nofollow" >7net<img src="//i.moshimo.com/af/i/impression?a_id=1082680&p_id=932&pc_id=1188&pl_id=12456" width="1" height="1" style="border:none;"></a></div><div class="shoplinkbk1"><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3390948&pid=885314885&vc_url=http%3A%2F%2Fhonto.jp%2Fnetstore%2Fsearch_021_104839973008.html%3Fsrchf%3D1%26srchGnrNm%3D1&vcptn=kaereba" target="_blank" rel="nofollow" >honto<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3390948&pid=885314885" height="1" width="1" border="0"></a></div>           <div class="shoplinkkino"><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3390948&pid=886623503&vc_url=http%3A%2F%2Fwww.kinokuniya.co.jp%2Ff%2Fdsg-01-9784839973001&vcptn=kaereba" target="_blank" rel="nofollow" >紀伊國屋書店<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3390948&pid=886623503" height="1" width="1" border="0"></a></div>          <div class="shoplinkebj"><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3390948&pid=886623490&vc_url=https%3A%2F%2Febookjapan.yahoo.co.jp%2Fbooks%2F591249%2FA002386414%3Fdealerid%3D30064%26utm_source%3Dasp%26utm_medium%3Dmedi%26utm_campaign%3Drate_yome&vcptn=kaereba" target="_blank" rel="nofollow" >ebookjapan<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3390948&pid=886623490" height="1" width="1" border="0"></a></div>      </div></div><div class="booklink-footer"></div></div></div>


## Gatsby プロジェクトの始め方

Gatsbyをインストールします

```
npm install -g gatsby-cli
```

ブログ用のテンプレート一式をダウンロードして、プロジェクトを作成します。

```
gatsby new sample-blog https://github.com/gatsbyjs/gatsby-starter-blog
```
sample-blogはプロジェクト名で、好きなファイル名に変えてOK。
sample-blogディレクトリの中に初期ファイルが作成されます。

sample-blogディレクトリ内に移動し、開発サーバーを起動させます。

```
cd sample-blog
gatsby develop
```

起動したら、Webブラウザで下記URLにアクセスします

```
http://localhost:8000/
```

画面上にHello world!が表示されればOK！

ctrl+Cでサーバーを終了できます。

## Gatsbyブログの制作プロセス

今後追記予定

### 1 ページの作成

### 2 画像の表示
gatsby-imageという機能を使うと、画像の最適化や高速化をしてくれます。


プラグインを導入
```
npm install gatsby-image
npm install gatsby-transformer-sharp gatsby-plugin-sharp
npm install gatsby-source-filesystem
```

gatsby-config.jsに設定
```
module.exports = {

  .....

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
```

graphQLで使いたい画像を取得。

```js:title=Logo.js
import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 100, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
  )
}

export default Logo
```

※同じページで複数画像使うときはエイリアスをつかう。

```
export const query = graphql`
     query {
      apple: file(name: { eq: "apple" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 100, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      lemon: file(name: { eq: "lemon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 100, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
```

画像の表示箇所
```
<Img fluid={apple.file.childImageSharp.fluid} alt="apple" />
```

### 3 CSSを使う

* <a href="https://www.gatsbyjs.org/tutorial/part-two/" target="_blank" rel="noopener noreferrer">Introduction to Styling in Gatsby</a>

### 4 フォントを変える

やり方①typography.jsを使う
* <a href="https://www.gatsbyjs.org/docs/typography-js/" target="_blank" rel="noopener noreferrer">Typography.js
</a>

やり方②Typefaceを使う
* <a href="https://www.gatsbyjs.org/docs/recipes/styling-css/#using-google-fonts" target="_blank" rel="noopener noreferrer">Using Google Fonts</a>

typefaceをインストール
```
npm install --save typeface-allura
```
typefaceの名前は↓のpackagesの中に入っています
<a href="https://github.com/KyleAMathews/typefaces/" target="_blank" rel="noopener noreferrer">the typefaces project</a>

gatsby-browser.jsにtypefaceを追記します。
```
import "typeface-allura"
```

CSSにフォントファミリーを追記します。
```
{ font-family: allura }
```

### 5 ブログ記事を表示する


* [ブログのカテゴリー画像を表示させる](/gatsby-category-image/)

### 6 ワードプレスのデータをGatsbyに移行する
Wordpressから記事データ(XML形式)をエクスポートします。
markdown形式に置き換えます。

### 7 GatsbyブログをNetlifyで公開する
* [Gatsby+Netlifyデプロイから独自ドメイン設定まで](/gatsby-netlify/)

### 8 ハンバーガーメニューの作成
* <a href="https://snopkowski.com/blog/gatsby-navigation-styled-components" target="_blank" rel="noopener noreferrer">Gatsby Navigation using Styled Components and useState hook</a>