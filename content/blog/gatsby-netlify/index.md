---
title: Netlifyを使って、Gatsby.jsブログを独自ドメインで公開する手順
date: 2020-07-10T10:00:00+09:00
featured: icatch-20190826.jpg
category: WebNote
tags:
  - Gatsby
  - Netlify
---


Gatsby.jsブログの公開にはNetlifyというホスティングサービスを使います。

NetlifyとGitHubを連携すると、Gatsbyで作ったサイトがWeb上に公開でき、また更新も自動で反映してくれます。

使うもの
* GitHub
* Netlify

事前準備として、GitHubとNetlifyのアカウント（無料プランでOK）を取得しておきます。

## GitHubリポジトリにプロジェクトをpushする

GitHubで新しいリポジトリを作成します。

![新規リポジトリ作成](ss-gatsby-netlify-01.jpg)


プロジェクトフォルダでターミナルを開きます。

スターターブログなどをコピーしてプロジェクトを作った場合、プロジェクトフォルダ内に「.git」が作成されていますので、「.git」を削除しておきます。

```
rm -rf .git
```

GitHubのコマンドに従って、リモートリポジトリにプロジェクトをプッシュします。
![リモートリポジトリにプッシュ](ss-gatsby-netlify-01-2.jpg)

ローカルリポジトリの新規作成
```
git init
git add -A
git commit -m "first commit"
git remote add origin https://github.com/emmieworks/gatsby-zeroforest.git
```
最後の行のURLはリポジトリごとに変わります。

プロジェクトをプッシュ
```
git push -u origin master
```

これで、GitHubのリポジトリをみると、ファイル群が追加されています。


## Netlifyでサイトを公開

NetlifyにGitHubから新規サイトを登録します。

ログインして、右上の「New Site From Git」というボタンをクリックします。
![New Site From Git](ss-gatsby-netlify-02.jpg)

ログインして、右上の「New Site From Git」ボタンをクリックします。
![New Site From Git](ss-gatsby-netlify-02.jpg)

「GitHub」ボタンをクリックします。
![New Site From Git](ss-gatsby-netlify-03.jpg)

Netlifyと連携させたいリポジトリ（先ほどプッシュしたリポジトリ）を選んで、次に進みます。
![New Site From Git](ss-gatsby-netlify-04.jpg)

リポジトリを選択します。
![New Site From Git](ss-gatsby-netlify-05.jpg)

「Deploy Site」をクリックします。
![New Site From Git](ss-gatsby-netlify-06.jpg)

デプロイが開始します。
![New Site From Git](ss-gatsby-netlify-07.jpg)

デプロイが終わると
`https://xxx.netlify.app`というURLが表示されます。
これがHPのURLになります。

## Netlifyに独自ドメインを設定する(ムームードメインの場合)

独自ドメインを設定します。

SettingsのDomainから、Custom Domainメニューのドメインを追加します。
![カスタムドメイン設定](ss-gatsby-netlify-08.jpg)

DNS Configurationを設定します。
![カスタムドメイン設定](ss-gatsby-netlify-09.jpg)

画面に従って、ドメインを設定していきます。

![DNS設定](ss-gatsby-netlify-10.jpg)

![DNS設定](ss-gatsby-netlify-11.jpg)

![DNS設定](ss-gatsby-netlify-12.jpg)

最後にネームサーバーの設定情報が出てくるので、これをドメインのネームサーバーに設定します。
![DNS設定](ss-gatsby-netlify-13.jpg)

ムームードメインの場合
![DNS設定](ss-gatsby-netlify-14.jpg)

ムームー管理画面から、該当するドメインを選択＞ネームサーバーの設定変更＞「取得したドメインで使用する

※「上級者向け」のネームサーバー１〜４に順に入力して、ネームサーバー設定変更ボタンを押して設定完了です。

## その後、更新するとき

プロジェクトをビルド。
```
gatsby build
```

更新したファイルをリモートリポジトリへプッシュ
```
git add -A
git commit -m "update"
git push
```
Netlifyでデプロイされて、ホームページに変更が反映されます。