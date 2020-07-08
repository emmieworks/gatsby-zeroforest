---
title: Ruby on Railsで日記アプリ（ミニブログ）を作る
date: 2020-06-20T15:00:47+09:00
featured: icatch-20200620.jpg
category: Programming
tags:
  - Ruby On Rails
status: published
---

はじめてRailsアプリの作成〜デプロイまでやってみました。
ProgateでRailsのRuby on rails基礎を学んだので、その延長線上で勉強がてら、ミニブログ(CMS）を作ってみました。

## 完成品
[https://minidiary-app.herokuapp.com/](https://minidiary-app.herokuapp.com/)

起動までに30秒程、時間がかかります。

メアド：nekosan@cat.com
パスワード:catcat
で管理画面にログインできます。

### 主な機能

【日記の管理】
- 日記を投稿／編集／削除できる
- 日記にカテゴリーを設定できる

【カテゴリーの管理】
- カテゴリーを作成／編集／削除できる

【ユーザーの管理】
* 管理者としてログインできる
* ログインした管理者のみが日記を投稿／編集できる

制作期間：8時間

 【使った技術】
* Ruby on Rails
* SQLite

## 制作プロセス

1. Rails アプリケーションの作成
2. 日記ページの作成
3. カテゴリーを設定できるようにする
4. ユーザーログインできるようにする
5. Web上に公開する（デプロイ）

基本的な作り方はProgateのレッスンにあったtweetアプリと同じ。
環境構築とWeb公開するところは調べながらだったので、記録しておきます。

## 環境構築

### Rails アプリケーションの作成

プロジェクトを作成したいディレクトリ内で下記コマンドを実行。

`$ rails new miniblog`

### Rails サーバーを起動する

アプリケーション（miniblog）のディレクトリに移動して下記コマンドを実行。

`$ rails server`

Webブラウザから「localhost:3000」にアクセスすると、スタートページが表示される。

### アプリケーションの構成

config/routes.rb → URLとコントローラをつなぐルーティングの記載
views → ここにHTMLファイルが入る。
models →ここにデータのチェックを書く
controllers → データベースの更新処理や、ビューで使う変数の設定
assets/stylesheets→スタイルシートを入れる。（初期はapplication.cssになっているけれど、application.scssにファイル名を変更すれば、Sassで使える。）

## 本番環境に公開する（デプロイ）

 作ったプログラムをGitHubに登録し、Herokuで公開するようにします。

### Gemfileの設定

Gemfileに、開発環境と本番環境の設定を記述します。
もともとある「gem ‘sqlite3’」の行をコメントアウトして、group :development, :test do ~~ endの中に記述します。

```
gem `sqlite3`

group :development, :test do
gem `sqlite3`
end

group :production do
gem `pg`
end
```

 ターミナル上で下記コマンドを実行します。

```
$ bundle install --without production
```

```Ruby:title=config/database.yml
production:
<<: *default
adapter: postgresql
encoding: unicode
pool: 5
```


```Ruby:title=test.config/environments/production.rb
config.assets.compile = true
```

### GitHubに登録

```
$ git init
$ git add -A
$ git commit -m "first commit"
```

### Herokuで公開する

Herokuにログイン
```
$ heroku login
$ heroku: Press any key to open up the browser to login or q to exit:
```

herokuのページが開くので、ログイン後に、ターミナルに戻る。

 【アプリを作成】
```
$ heroku create アプリ名
```

※アプリ名はURLの一部になるため、他の人と同じ名前は登録できない。

登録すると、アプリのアドレスが表示されます。

```
$ heroku create minidiary-app
Creating ⬢ minidiary-app… done
https://minidiary-app.herokuapp.com/ | https://git.heroku.com/minidiary-app.git
```

【デプロイ】

```
$ git remote add heroku https://git.heroku.com/minidiary-app.git
$ git push heroku master
```

 【本番環境にデータベースを作成】
```
$ heroku run rails db:migrate
```

Heroku上でのRails Console heroku上でもrails consoleを動かせます。

```
$ heroku run rails c
```

私はこれで、新規ユーザーを登録しました。
```
user = User.new(name: "ねこさん", email:"nekosan@cat.com",password:"catcat")
user.save
```

### プログラムを更新したとき

変更したプログラムをデプロイ

```
$ git add -A
$ git commit -m "Update app"
$ git push heroku master
```

テーブルを変更した場合は下記コマンドも実行

```
$ heroku run rails db:migrate
```


### Herokuからアプリを削除するとき

```
$ heroku apps:destroy --app アプリ名
```

アプリ名を再入力すると、削除完了


## 今後やりたいこと

実際、使うにはまだ機能がほしいところ。
文字を太くしたり、改行できるようにしたり、
カテゴリーの順番入れ替えもできたらいいなぁと。