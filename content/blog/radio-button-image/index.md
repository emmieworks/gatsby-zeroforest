---
title: ラジオボタン／チェックボタンの代わりに画像選択にする方法
date: 2020-06-13T12:30:54+09:00
featured: icatch-20200613.jpg
category: Programming
status: published
---

 HTMLとCSSで、お問い合わせフォームのラジオボタンやチェックボタンの代わりに画像選択にします。

   Before

 ![Before](ss-20200613-before.jpg)

  After
 ![After](SS-20200613-after.jpg)

## HTMLとCSS

```markup:title=HTML
 <div>
  <input id="image\_a" type="radio" value="image\_a.jpg" name="image">
  <label for="image\_a"><img src="/images/image\_a.jpg" with="40" height="40"></label>
  <input id="image\_b" type="radio" value="image\_b.jpg" name="image">
  <label for="image\_b"><img src="/images/image\_b.jpg" with="40" height="40"></label>
  <input id="image\_c" type="radio" value="image\_c.jpg" name="image">
  <label for="image\_c"><img src="/images/image\_c.jpg" with="40" height="40">
  </label>
</div>
 ```

```markup
/* ラジオボタンの○を消す */
input[type="radio"] {
   display: none;
}

/* 画像の周りに隙間をあける */
label img {
  margin: 3px; padding: 5px;
}

/* 未選択の場合、色を薄くする */
input[type="radio"] + label img {
  opacity:0.2;
}
/* 選択済みの場合、色を濃くする */
input[type="radio"]:checked + label img {
  opacity:1;
}
```

## やり方

### ①label＋imgを足す

![画像を追加](./ss-20200613-01.jpg)

labelタグの中で画像を表示します。
labelタグのforはinputのidと揃えます。ここでは、inputの`id=“image\_a”`と`label for =“image\_a”`を揃えています。

### ②CSSでラジオボタンを非表示

 ![ラジオボタンを非表示](./ss-20200613-02.jpg)

```markup
 input[type="radio"] { display: none; }
```

### ③画像の選択／未選択で表示を変える

![画像の選択](SS-20200613-after.jpg)

```markup
input[type="radio"] + label img { opacity:0.2; }
input[type="radio"]:checked + label img { opacity:1; }
```

## サンプルコード

<iframe height="265" style="width: 100%;" scrolling="no" title="ラジオボタンを画像で表示" src="https://codepen.io/filledforest/embed/abdNLrM?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/filledforest/pen/abdNLrM'>ラジオボタンを画像で表示</a> by Emi
  (<a href='https://codepen.io/filledforest'>@filledforest</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
