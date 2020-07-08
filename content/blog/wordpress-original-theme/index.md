---
title: WordPressの自作テーマの作り方
date: 2018-07-02T20:00:33+09:00
featured: icatch-20180702-1.jpg
category: WordPress
tags:
  - WordPressテーマ自作
status: published
---

WordPressでオリジナルテーマを作ってみました。

## 制作したもの

もともとWordPressを始めた時は無料テーマをテーマをカスタマイズ使用していました。
そのつど、欲しい機能を探してプラグインをいれたり、プログラムを継ぎ足しているため、どんどん重くなっていってしまった。
また、カスタマイズのために、テーマの仕様を毎度読みとくの面倒だったり。＾＾；
それで自分用に必要な機能がそろったテーマを作りたいなと思いました。

制作したおかげでWordPressのカスタマイズにも詳しくなり、仕組みを理解できて、すごく勉強になりました＾＾

* テーマのカスタマイズ方法に詳しくなる
* WordPressの仕組みを理解する
* Bootstrapに慣れた

この辺の目標は、おおよそ達成できました。


## WordPressテーマの作り方

### 開発環境を用意する

自分のPCに開発環境を作った方が、ファイルの書き換えや反映確認も簡単です。

[MAMPでWordPressの開発環境を作る](/mamp-wp-setup/)

### テーマの骨組み（ブランクテーマ）を用意する

まずは、テーマの箱を作っていきます。
[WordPressブランクテーマを用意する](/blank-theme/)

### テンプレートファイルを作る

ざっくりこんな手順で作っていきます。
①サイトの構成図・デザインを作る
②HTML/CSSファイルでページを作る
③WordPress用のコードに書き換える

[WordPressの仕組み〜テンプレートファイルの優先順位](/wordpress-template/)

### テーマに機能を追加する

* [functions.phpとは〜WordPressテーマに機能を追加する〜](/wordpress-theme-functions/)
* [検索機能をつける](/wordpress-searchform/)
* [関連記事を表示する](/wordpress-related-posts/)

### デザインを整える

WordPress用で出力されるHTMLコードに、CSSを組み合わせて作っていきます。

* [【WordPress】ページトップへ戻るボタンを追加する](/gototop/)
* [【WordPress】プルダウンメニューのデザインを整える](/wordpress-pulldown-menu/)

## WordPress制作中に読んだ本
* [WordPressで本格的にホームページを作りたい人におすすめ本４冊](/wordpress-books/)