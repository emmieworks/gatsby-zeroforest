---
title: WordPressからGatsbyにブログを変えました
date: 2020-07-04T20:00:47+09:00
featured: icatch-20200620.jpg
category: Programming
tags:
  - Gatsby
  - Netlify
status: published
---


使っていたブログを、WordPressからGatsbyに変えました。

WordPressは3年ほどを使っていて、細かくカスタマイズしながら、魅せるブログを作れるところがお気に入りでした。

ただ、管理画面での動作が重いこと、
レイアウトを整える方に時間がかかってしまうことが悩みで、
どうにか楽にブログを運用できないかと思っていたのです。


【やりたいこと】

**管理画面にログインせずに記事投稿したい**

記事をテキストファイルに保存したら、そのまま公開されるようにしたい。
アイキャッチ画像のアップロードもなしにしたい。


**Gitで記事を管理したい**

Gitで記事の変更履歴を残して、記事のどの文章を修正したか追えるようにしたい。


**markdownで記事を書ける**

プログラムコード、画像を表示するときも、markdownの方がシンプル。


調べてみたら、似たようなことを考える人たちは、Gatsby.jsを使ったブログにしているみたいなので、私も作ってみることをしました。


## そもそも、Gatsby とは？

静的サイトジェネレーターという
WebサイトのHTMLファイルを生成してくれるツール。

WordPressのようなCMSでは、データベースで記事を管理している。
ページにアクセスされたときに、データベースから記事を取得して、HTMLを生成して表示させる仕組みになっている。

たいして、静的ジェネレーターは、ページをあらかじめ生成しておくため表示速度が早い。
また、セキュリティリスクが低く、サーバーの管理も不要になるらしい。

メリットが多そうです。

## Gatsby でのブログ作り

参考図書は、チュートリアルと本。


<div class="cstmreba"><div class="booklink-box"><div class="booklink-image"><a href="//af.moshimo.com/af/c/click?a_id=742757&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F" target="_blank" rel="nofollow" ><img src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/3001/9784839973001.jpg?_ex=200x200" style="border: none;" /></a><img src="//i.moshimo.com/af/i/impression?a_id=742757&p_id=56&pc_id=56&pl_id=637" width="1" height="1" style="border:none;"></div><div class="booklink-info"><div class="booklink-name"><a href="//af.moshimo.com/af/c/click?a_id=742757&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F" target="_blank" rel="nofollow" >Webサイト高速化のための　静的サイトジェネレーター活用入門</a><img src="//i.moshimo.com/af/i/impression?a_id=742757&p_id=56&pc_id=56&pl_id=637" width="1" height="1" style="border:none;"><div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div></div><div class="booklink-detail">エビスコム マイナビ出版 2020年06月01日    </div><div class="booklink-link2"><div class="shoplinkrakuten"><a href="//af.moshimo.com/af/c/click?a_id=742757&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16301755%2F" target="_blank" rel="nofollow" >楽天ブックス</a><img src="//i.moshimo.com/af/i/impression?a_id=742757&p_id=56&pc_id=56&pl_id=637" width="1" height="1" style="border:none;"></div><div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4839973008/filledfores07-22/" target="_blank" rel="nofollow" >Amazon</a></div><div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=Web%E3%82%B5%E3%82%A4%E3%83%88%E9%AB%98%E9%80%9F%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%80%80%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E6%B4%BB%E7%94%A8%E5%85%A5%E9%96%80&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=filledfores07-22" target="_blank" rel="nofollow" >Kindle</a></div><div class="shoplinkseven"><a href="//af.moshimo.com/af/c/click?a_id=1082680&p_id=932&pc_id=1188&pl_id=12456&s_v=b5Rz2P0601xu&url=http%3A%2F%2F7net.omni7.jp%2Fsearch%2F%3FsearchKeywordFlg%3D1%26keyword%3D9784839973001" target="_blank" rel="nofollow" >7net<img src="//i.moshimo.com/af/i/impression?a_id=1082680&p_id=932&pc_id=1188&pl_id=12456" width="1" height="1" style="border:none;"></a></div><div class="shoplinkbk1"><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3390948&pid=885314885&vc_url=http%3A%2F%2Fhonto.jp%2Fnetstore%2Fsearch_021_104839973008.html%3Fsrchf%3D1%26srchGnrNm%3D1&vcptn=kaereba" target="_blank" rel="nofollow" >honto<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3390948&pid=885314885" height="1" width="1" border="0"></a></div>           <div class="shoplinkkino"><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3390948&pid=886623503&vc_url=http%3A%2F%2Fwww.kinokuniya.co.jp%2Ff%2Fdsg-01-9784839973001&vcptn=kaereba" target="_blank" rel="nofollow" >紀伊國屋書店<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3390948&pid=886623503" height="1" width="1" border="0"></a></div>          <div class="shoplinkebj"><a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3390948&pid=886623490&vc_url=https%3A%2F%2Febookjapan.yahoo.co.jp%2Fbooks%2F591249%2FA002386414%3Fdealerid%3D30064%26utm_source%3Dasp%26utm_medium%3Dmedi%26utm_campaign%3Drate_yome&vcptn=kaereba" target="_blank" rel="nofollow" >ebookjapan<img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3390948&pid=886623490" height="1" width="1" border="0"></a></div>      </div></div><div class="booklink-footer"></div></div></div>


スタートブログをインストールする


まずは、最低限の機能だけ入れて公開！

超シンプルになりました。

これから、ちょこちょこ記事を移したり、機能を付け足して、育てていきたいと思います。
