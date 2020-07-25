---
title: CSSとJavaScriptで作るハンバーガーメニュー
date: 2020-07-25T19:00:04+09:00
category: Programming
featured: icatch.jpg
tags:
  - CSS
  - JavaScript
status: published
---

## ハンバーガーメニューとは

スマホなどで、ホームページを表示した時に見える３本線のこと。

この３本線が、ハンバーガーのように見えることから、ハンバーガーメニューと呼ばれています。

![ハンバーガーメニュー](asset01.png)

クリックすると、メニューが表示されます。
![ハンバーガーメニュー](asset02.png)


参考サイト：[The Virginia](https://virgnia.jp/)


【ハンバーガーメニューのメリット】

* スマホなどの小さい画面で、コンテンツの表示エリアを確保できる。

* コンテンツとは別に、メニューエリアを確保できるので、メニューをクリックしやすい。


【ハンバーガーメニューのデメリット

* スマホに慣れていない人は、３本線がメニューだと分からない

* 一度メニューボタンを押さないと、メニューの中身が見れない


今回は、ハンバーガーメニューの作り方をメモしておきます。


## ハンバーガーメニューの作り方

### DEMO
<iframe height="400" style="width: 100%;" scrolling="no" title="ハンバーガーメニューサンプル" src="https://codepen.io/filledforest/embed/QWyoeLv?height=400&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filledforest/pen/QWyoeLv'>ハンバーガーメニューサンプル</a> by Emi
  (<a href='https://codepen.io/filledforest'>@filledforest</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

サイズを×0.5にして、横幅を広くすると、PC用の表示になります。
PC版では、メニューボタンがなくなり、左側にロゴ、右側にメニューが並びます。


### メニューボタン

```css
#navbtn{
  position: fixed;
  top: 15px;
  right: 15px;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

/* 高さ1pxの線を上下に表示 */
#navbtn::before,
#navbtn::after{
  content : '';
  display: block;
  height: 1px;
  background-color: #333333;
  transform: translateY(10px);
  transition: 0.3s ease-in-out;
}

/* 高さ1pxの線を中央に表示 */
#navbtn::before{
  transform: translateY(-10px);
  box-shadow: 0 10px #333333;
}
```

`#navbtn::before`で上の線、`#navbtn::after`で下の線、`#navbtn::before`に`box-shadow`をつけて、真ん中の線を作っています。

### 閉じるボタン

```css
.open #navbtn{
  z-index: 100;
}
.open #navbtn::before{
  transform: rotate(-45deg);
  box-shadow: none;
}
.open #navbtn::after{
  transform: rotate(45deg);
  box-shadow: none;
}
```
もともとあった３本線のメニューから、beforeとafterの上下線を45度ずつ傾けて、×にしています。

box-shadowをnoneにすることで、中央線を一本なくしています。

### メニュー部分

```css
.nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
```

flexにして、中央表示をしています。

### メニューの表示切り替え

```css
.nav{
  /* 初期は非表示 */
  visibility: hidden;
  opacity: 0;
  /* ふわっと表示 */
  transition: 0.5s ease-in-out;
}
```

```css
.open .nav{
  visibility: visible;
  opacity: 1;
}
```

### JavaScriptでopenクラスを付与

メニューボタンを押すと、htmlにopenクラスが付与されるようにします。

```JavaScript
document.getElementById("navbtn").onclick = function(){
  document.querySelector('html').classList.toggle('open');
}
```

## 実装サンプル

### ボタンのアニメーション

* [【CSS】ハンバーガーメニュー実装サンプル集（クリック時のエフェクトも集めました）](https://125naroom.com/web/2958)

* [CSSで実装するハンバーガーメニュークリック時のエフェクト 10＋](https://www.nxworld.net/tips/12-css-hamburger-menu-active-effect.html)

### 今後追記予定

* 左上にメニュー＋左からスライド

* 右上にボタン＋右からスライド

* 中央にボタン＋上からスライド



## WordPressでハンバーガーメニューを実装するには？？
WordPressでは、グローバルメニュー用のHTMLコードに合わせて、CSSを設定する必要があります。

詳しくは[【WordPress】プルダウンメニューのデザインを整える](/wordpress-pulldown-menu)をどうぞ。