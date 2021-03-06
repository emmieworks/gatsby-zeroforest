---
title: MixhostのWordpressブログ始め方
date: 2019-08-27T14:01:54+09:00
featured: icatch-20190827.jpg
category: WebNote
tags:
  - WordPress
status: published
---

この記事では、MixhostでWordPressブログをはじめる手順を説明します。

【WordPressをインストールする手順】

1. サーバー（ホームページを置く場所）を借りる
2. ドメイン(URL)を取得する
3. ドメイン（URL）とサーバーを紐づける
4. サーバーにWordPressをインストールする

## サーバーを借りる（Mixhost）の契約

* <a href="https://px.a8.net/svt/ejp?a8mat=2ZLES6+5IUSTU+3JTE+61C2Q" rel="nofollow">MixHost</a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=2ZLES6+5IUSTU+3JTE+61C2Q" alt="">

契約がまだの方は、まずはHPのお申し込みページからすすみましょう。

![お申し込み](20190827_ss-03.jpg)

お客様情報を入力して、登録完了。

登録後、メールで「【mixhost】 お申込み受付完了のお知らせ」が届きます。
続いて、メールで「【mixhost】 サーバーアカウント設定完了のお知らせ」が届きます。 このメールにはサーバーへのログイン情報が書かれているので大切に保管しておいてくださいね。

メールの中にコントロールパネルのURLが書かれています。
アクセスして、メール内のユーザー名とパスワードでログインしてください。

## ドメイン（URL）を取得

あらかじめ、ホームページに使うドメイン（URL）を決めて取得してくださいね。

* <a href="https://px.a8.net/svt/ejp?a8mat=2ZCY80+D1R12Q+50+2HFY7M" rel="nofollow">お名前.com</a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=2ZCY80+D1R12Q+50+2HFY7M" alt="">
* <a href="https://px.a8.net/svt/ejp?a8mat=2ZTSGZ+DJM182+348+1BQJAA" rel="nofollow">ムームードメイン─</a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=2ZTSGZ+DJM182+348+1BQJAA" alt="">

## ドメイン〜URLとサーバーを紐づける〜

### ドメイン側にMixhostを設定する

ドメインの管理画面にログインして、ネームサーバーの設定を行いましょう。 コントロールパネル＞ドメイン一覧＞ドメイン名からドメイン情報一覧に行くと、ネームサーバ設定変更ができます。

![ネームサーバーの設定](ss_get_domain_07.jpg) このネームサーバの１〜５に設定を入れます。

> ネームサーバー1: ns1.mixhost.jp
> ネームサーバー2: ns2.mixhost.jp
> ネームサーバー3: ns3.mixhost.jp
> ネームサーバー4: ns4.mixhost.jp
> ネームサーバー5: ns5.mixhost.jp


### Mixhostにドメインを設定する

Mixhostの管理画面から、cPanelを開きます。

![アドオンドメイン](WP_1105_2_11.jpg)
アドオンドメインをクリックします。

![アドオンドメイン](WP_1105_2_12.jpg)

ドメイン名を入力します。

![アドオンドメイン](WP_1105_2_13.jpg)

ドメイン名を入力すると、サブドメインとドキュメントルートが設定されます。ドメイン追加ボタンをクリックしましょう。

![アドオンドメイン](WP_1105_2_14.jpg)

このようにアドオンドメインが作成されれば、設定完了です。

## サーバーにWordPressをインストールする

Mixhostの管理画面からcPanelに進みます。

![WordPressインストール](WP_1105_2_15.jpg)

cPanelの下の方にあるスクリプト一覧のなかから、「WordPress」をクリックしましょう。

![WordPressインストール](WP_1105_2_16.jpg)

ソフトの概要が表示されています。Install Nowボタンをクリックします。

![WordPressインストール](WP_1105_2_17.jpg)


![WordPressを選ぶ](WP_1105_2_18.jpg)

以下の項目を設定します。
* サイト名
* サイト説明
* Admin Username
* Admin Password
* 管理者Eメール
他の部分はデフォルト設定でOKです。

入力できたら、「インストール」ボタンをクリックします。 インストール完了するとこのような画面にうつります。

【インストール完了画面】

![インストール完了](WP_1105_2_19.jpg)

ホームページのURL：`https://インストール時に設定したURL`

管理画面のURL：`https://インストール時に設定したURL/wp-admin/`

アドレスをクリックして、WordPressブログへアクセスしてみましょう。 ドメインの反映までに１〜２時間かかることがあります。 ページが表示できないときは、しばらく待ってみましょう。
