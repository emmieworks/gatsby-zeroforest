---
title: 【prism.js】ブログ記事にソースコードをきれいに表示する方法
date: 2018-07-05T19:00:45+09:00
featured: icatch_20180704-1.jpg
category: Programming
tags:
    - JavaScript
status: published
---

技術系ブログだと記事にプログラムの説明はつきもの。
今回はブログ記事にソースコードを綺麗に表示させる方法の紹介です。

## 基本の書き方：preタグとcodeタグを使う

### codeタグ→プログラムの記述

```markup
<code>ここにコードを記述する</code>
```

codeはプログラムのソースコードですよという意味のタグ。
このタグで挟んだ文章は、等幅のフォントで表示してくれます。

### preタグ→改行などインデントをそのまま表示する

preformed text（整形済みテキスト）というらしい。
このタグを使うと、改行やスペース、インデントなど、そのまま表示されます。

```markup
<pre>ここに記述するよ</pre>
```


### preとcodeを合わせて、複数行のプログラムを表示する

実際に使うときにはpreとcodeで挟めばOK。

```markup
<pre>
    <code>ここにプログラムを記述する</code>
</pre>
```

なお、「>」「<」「&」などはHTMLタグと区別するために、[エスケープ文字に変換します](https://tech-unlimited.com/escape.html)。（WordPressのビジュアルエディタ は自動で変換してくれるので、気にしなくてOK）


ブログの記事にはこうかくと、実際にはブラウザ上にはHTMLのコードが表示されます。

```markup
<div class="links">
    <h4>Links</h4>
    <ul class="footer-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
```

## ソースコードをキレイに見せるサービス＆ツール

このままだと文字がべたっと並んでいるだけ。もうちょっと読みやすくしたいですよね。

### オンラインサービス：CodePenを使う

HTML、CSS、JavaScriptなどマークアップ系のコードであれば[CodePen](https://codepen.io)もおすすめ。
ブラウザ上で作成したコードを記事にそのまま貼り付けることができます。

<iframe height="265" style="width: 100%;" scrolling="no" title="ページトップへ戻る" src="https://codepen.io/filledforest/embed/gjLdqz?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filledforest/pen/gjLdqz'>ページトップへ戻る</a> by Emi
  (<a href='https://codepen.io/filledforest'>@filledforest</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Prism(コードフォーマット用JSライブラリ)を使う

ソースコード全般を読みやすくするには、[Prism](https://spyweb.media/2017/10/05/prism-js-highlight-syntax-source-code/)がおすすめ。
行数やコードの色分けをしてくれます。

```markup
<div class="links">
    <h4>Links</h4>
    <ul class="footer-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>
```

cssやjavascriptをホームページで使ったことがある人におすすめです。

### ①prism.cssとprism.jsをダウンロードして、テーマフォルダ内に配置する

```markup
 テーマフォルダ
 ┗ CSS
 ┗ prism.css
 ┗ JS
 ┗ prism.js
```

### ②CSSファイルとJSファイルを読み込む

<head>の中で、prism.cssを読み込むコードを入れる。

```markup
<link href="<?php echo get\_stylesheet\_directory\_uri(); ?>/css/prism.css" rel="stylesheet">
```

</body>タグの直前で、prism.jsを読み込むコードを入れる。

```markup
<script src="<?php echo get\_stylesheet\_directory\_uri(); ?>/js/prism.js"></script>
```

WordPressでは、使っているテーマフォルダのURLを指定します。
[テーマフォルダのURLについて](/wordpress-theme-css-js/)

### ③記事内では、preとcodeのクラスで表示方法を設定する

codeのクラスにlanguage-〇〇とプログラミング言語名を指定します。
また、preのクラスにはline-numbersを書いて行数を表示させます。

```markup
<pre class="line-numbers"> <code class="language-markup"> 〜〜 </code></pre>
```

preクラスにdata-start=3などと入れると、表示される行数が3行目から表示されるようになります。

【参考記事】[【JS】シンタックスハイライトPrism.jsの使い方](https://niwaka-web.com/prism_js/)


