---
title: 記事のサンプル
date: 2017-01-01
category: Programming
updateDate: 2020-07-31
description: マークダウン記事の表示サンプルです
tags:
  - markdown
---

マークダウン記事の表示サンプルです

## 見出し2

### 見出し3

#### 見出し4

## リスト

### 順番なしリスト

- リスト1
  - ネスト2 リスト1
    - ネスト3 リスト1
    - ネスト3 リスト2
  - ネスト2 リスト2
- リスト2
- リスト3

### 順番なしリスト②

* リスト1
    * ネスト2 リスト1
        * ネスト3 リスト1
        * ネスト3 リスト2
    * ネスト2 リスト2
* リスト2
* リスト3

### 順番ありリスト

1. 番号付きリスト1a
    2. 番号付きリスト2a
        1. 番号付きリスト3a
        1. 番号付きリスト3b
    1. 番号付きリスト2b
1. 番号付きリスト1b
1. 番号付きリスト1c


## 文字装飾

### 太字
太字**はこんな感じ**で表示されます。

### 水平線
---

### 引用
> 樹木にとって最も大切なものは何かと問うたら、それは果実だと誰もが答えるだろう。
> しかし実際には種なのだ。
> -　ニーチェ


### リンク
[Google先生](https://www.google.co.jp/)

![Favicon](favicon.png)

## 表

| TH 左寄せ | TH 中央寄せ | TH 右寄せ |
| :--- | :---: | ---: |
| TD | TD | TD |
| TD | TD | TD |


|  TH  |  TH  |
| ---- | ---- |
|  TD  |  セル内で<br>改行  |

## シンタックスハイライター

### インライン

`import React from "react"`

### 複数行

```javascript
module.exports = {
  ...
  plugins: [
    ...
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `スペースID`,
        accessToken: `アクセストークン`,
      },
    },
  ],
}
```

### タイトル付きコード

```javascript:title=test.js
  const hello = 'hello'
```

## 文字装飾

<span style="background: linear-gradient(transparent 70%, #f2b1a4 70%);">ピンクのマーカー</span>

<span style="background: linear-gradient(transparent 70%, #cde3ce 70%);">緑のマーカー</span>

## 飾り枠

### 見出しつき

<div style="position:relative;border:1px solid #f2b1a4;padding:30px;border-radius:4px;
margin:30px;font-size:0.8rem;">
  <span style="position:absolute;top: -12px;left: 10px;padding: 5px 10px;border-radius:4px;font-size:0.8rem;background-color:#fffcf5;color:#f2b1a4;">【見出し付きの囲み枠】</span>
  ピンク色の枠線です。
</div>

<div style="position:relative;border:1px solid #91c294;padding:30px;border-radius:4px;
margin:30px;font-size:0.8rem;">
  <span style="position:absolute;top: -12px;left: 10px;padding: 5px 20px;background-color: #91c294;border-radius:4px;font-size:0.8rem;color:#fff;">【見出し付きの囲み枠】</span>
  緑色の枠線です。
</div>

### 背景色あり

<div style="margin:30px;padding:15px 30px;border-radius: 6px;background: #cde3ce;font-size:0.8rem;">背景緑の囲み枠／角丸</div>

<div style="margin:30px;padding:15px 30px;border-radius: 6px;background: #f2b1a4;font-size:0.8rem;">ピンクの囲み枠／角丸</div>

### 枠線／角丸

<div style="margin:30px;padding:15px 30px;border-radius: 6px;border: 4px double #91c294;font-size:0.8rem;">緑の囲み枠／角丸</div>

<div style="margin:30px;padding:15px 30px;border-radius: 6px;border: 2px solid #cde3ce;font-size:0.8rem;">薄い緑の囲み枠／角丸</div>

<div style="margin:30px;padding:15px 30px;border-radius: 6px;border: 2px solid #f2b1a4;font-size:0.8rem;">ピンクの囲み枠／角丸</div>


### 枠線


<div style="margin:30px;padding:15px 30px;border: 2px solid #91c294;font-size:0.8rem;">緑の囲み枠</div>

<div style="margin:30px;padding:15px 30px;border: 4px double #cde3ce;font-size:0.8rem;">薄い緑の囲み枠</div>

<div style="margin:30px;padding:15px 30px;border: 2px solid #f2b1a4;font-size:0.8rem;">ピンクの囲み枠</div>

