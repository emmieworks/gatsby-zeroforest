---
title: 【初心者向け】GitHubのインストールとプロジェクトでの使い方
date: 2020-04-04T18:00:31+09:00
updateDate: 2020-08-21
featured: icatch_20200331.jpg
category: Programming
tags:
    - git
    - GitHub
    - Sourcetree
---

プログラミングではよく使われるバージョン管理。

慣れるまで大変だけど、使えるようになるとめっちゃ便利！です。


<div class="related-posts">
    <span>バージョン管理のはじめかた</span>

1. [gitとSourcetreeをインストールして、バージョン管理をはじめる](/install-sourcetree/)
2. [GitHubインストールと普段のプロジェクトでの使い方]（この記事）
3. 【gitでバージョン管理】前の状態にファイルを戻す方法（準備中）
4. [【gitでバージョン管理】ブランチを使って、履歴を分ける方法](/git-branch/)
5. [GitHubでソースコードをブログに載せる方法まとめ](/github-gist-wordpress/)

</div>

##  GitとGitHub

git＝バージョン管理を行うためのシステムです。

gitを入れると、自分のPC上にファイルの変更履歴を保管するための場所が用意されて、バージョン管理のための機能が使えるようになります。

GitHub＝gitを用いたオンラインサービスです。

web上でファイルや変更履歴を共有できるようになります。

<div class="border-box">
    <span>GitHubを使うメリット</span>

* 複数人でプログラムを分担して開発できる

* 他の端末でソースコードや変更履歴を共有できる

* 他サービスと連携して、ホームページやアプリを簡単に公開できる
</div>

ちなみにGitHubにはプライベート機能があり、アップしたファイルの公開／非公開を自分で選ぶことができます。


個人的には、

* GitHubからプログラムを展開して、html/CSSやwordpressテーマのFTPアップロードの手間を省く

* GitHubで管理しているプログラムをブログに載せる

に、GitHubのありがたみ感じています。

## GitHubのはじめかた

まず事前準備として、GitとSourceTreeをインストールしておきます。

* [GitとSourceTreeのインストール方法](/install-sourcetree/)

GitHubを登録していきます。
<a href="https://github.co.jp/" target="_blank" rel="noopener noreferrer">GitHubの公式サイト</a>

![GitHub公式サイト](ss-github-install-01.jpg)

ID,メールアドレス,パスワードを入力して、次に進みます。

![GitHub新規登録](ss-github-install-02.jpg)

プランは「個人（Free）」を選びます。

![GitHubのプラン選択](ss-github-install-03.jpg)

メールが届くので、メールで本人確認を行い、登録完了させます。

![登録完了](ss-github-install-04.jpg)

### SourcetreeにGitHubを連携する

<a href="https://www.Sourcetreeapp.com/" target="_blank" rel="noopener noreferrer">Sourcetreeの公式サイト</a>

Downloadボタンを押して、SourceTreeをインストールします。

Soucetreeを開いたら、GitHubのアカウントをSourcetreeに追加します。

![SourcetreeからGitHubに接続](ss-sourcetree-github-01.jpg)

アカウント追加ボタンを押します。

![Sourcetreeのアカウント追加](ss-sourcetree-github-02.jpg)

Webブラウザが立ち上がって、GitHubとの連携画面が表示されます。

「Authorize atlassian」をクリックします。

![SourcetreeからGitHubアカウントを連携](ss-sourcetree-github-03.jpg)

これで、アカウントが追加されました。

![SourcetreeとGitHubの連携が完了した状態](ss-sourcetree-github-04.jpg)


## 覚えておきたいgitの基本用語


【バージョン管理でよくつかう用語】

| 用語 | 説明 |
| ---- | ---- |
| リポジトリ | 変更履歴の保管場所 |
| コミット| ファイルの変更を記録する|
| プッシュ| クラウド上にデータを送る|
| プル| クラウド上からデータをもらう|

まずこれだけ覚えればとりあえず使い始めることができます。

### リポジトリ

リポジトリ　＝ データの変更履歴を保管する場所

![gitのレポジトリとは](slide-repository.jpg)

リポジトリは変更履歴を保管する場所です。

リポジトリには２種類あります。

* 自分のPC上：ローカルリポジトリ

* インターネット上：リモートリポジトリ


### コミット

コミット　＝ ファイルの変更履歴をリポジトリに保存すること

![gitのコミットとは](slide-commit.jpg)

ただファイルを保存しただけでは、変更履歴は記録されません。

セーブポイントとして保存したいところ（作業が一段落したところで）、自分で作業内容を入力して記録します。

この変更内容の記録のことをコミットといいます。


### プルとプッシュ

![gitのプルとプッシュとは](slide-pull-push.jpg)

プル ＝ リモートリポジトリの内容をローカルリポジトリに反映すること

プッシュ ＝ ローカルリポジトリの内容をリモートリポジトリに反映すること


【再掲】バージョン管理でよくつかう用語

| 用語 | 説明 |
| ---- | ---- |
| リポジトリ | 変更履歴の保管場所。<br />リモートレポジトリ（Web上）とローカルレポジトリ(自分のPC上)がある。 |
| コミット | ファイルの変更をリポジトリに記録する |
| プッシュ | ローカルレポジトリ(自分のPC上)からリモートレポジトリ（Web上）にデータを送る |
| プル | リモートレポジトリ（Web上）からローカルレポジトリ(自分のPC上)にデータをもらう |


## 基本の使い方：新しくプロジェクトをはじめるとき

### 1.新規リポジトリ作成

プロジェクトの始めに、GitHubでレポジトリ（変更履歴を管理する場所）を作ります。

![GitHubでレポジトリー作成](ss-sourcetree-add-repository-01.jpg)

レポジトリの作成が完了したところ。

右の「Clone or Download」にリポジトリのURLが出てくるので、`https://github〜〜`のURLをコピーします。

![GitHubでレポジトリー作成完了](ss-sourcetree-add-repository-02.jpg)

### 2. クローン：リモートリポジトリの内容をローカルにコピー

続いて、GitHub上のリモートリポジトリの内容を丸ごとローカルのPCにコピー（＝クローン）します。

Sourcetree上部の「New」から「Clone from URL」をえらびます。

![Sourcetreeのクローンの手順](ss-sourcetree-add-repository-03.jpg)

リモートレポジトリの情報を入力します。

![リモートレポジトリの情報を入力](ss-sourcetree-add-repository-04.jpg)

* Source URL：先ほどGitHubでコピーしたURL

* Destination Path：自分のPC内の作業フォルダ

入力したら、Cloneを押します。


これで、新しくプロジェクトを始める設定は完了です。

プロジェクトフォルダの中に「.git」という隠しフォルダとReadme.mdが追加されています。

## ふだんの作業でやること

### 1. ファイルを更新する

プログラムなど使っているファイルを編集します。

試しに、sample.phpを作成して入れてみました。

![ファイルを追加](ss-sourcetree-pj-03.jpg)


Sourcetree上では変更されたファイルが表示されます。

![Sourcetreeで変更が入ったファイルが表示される](ss-sourcetree-pj-04.jpg)


<div class="border-box">
    <span>チームで開発しているとき</span>

複数人で、同じプログラムを編集している場合には、

自分が作業に入る前に、ローカルPC上のデータをリモート上データと同期させます。

個人の場合は、自分以外にファイルを更新しないので、この作業は飛ばしてOKです。

SourceTreeの「Pull(プル)」ボタンを押します。

![Sourcetreeからプル](ss-sourcetree-pj-02.jpg)

</div>

#### 2. コミット：作業を記録する

 作業が終わったら、コミットをします。
作業ごとにコミットしとおくと、後から見直したり、修正しやすいです。

ファイルにチェックを入れます。
複数ファイルをまとめて選ぶこともできます。

![Sourcetreeでコミット](ss-sourcetree-pj-05.jpg)

作業内容をメッセージ欄を入れて、コミットボタンを押します。

![Sourcetreeコミット完了](ss-sourcetree-pj-06.jpg)


#### 3. プッシュ：ローカルの変更内容をリモートリポジトリへアップロードする

作業が終わったら、PC上の内容をネット上に反映します。

Pullボタンを押します。

![Sourcetreeでプル](ss-sourcetree-pj-07.jpg)

OKを押します。

![OK](ss-sourcetree-pj-08.jpg)

完了すると、origin/masterのタグが一番上の行に移動します。

リモートリポジトリの状態(origin/master)がリポジトリの状態(master)と揃いました。

![完了](ss-sourcetree-pj-09.jpg)


続き＞＞ [【Gitでバージョン管理】ブランチの使い方とSourceTreeでの操作方法](/git-branch/)
