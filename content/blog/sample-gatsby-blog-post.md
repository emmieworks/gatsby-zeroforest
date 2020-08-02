---
title: 記事のサンプル
date: 2017-01-01
updateDate: 2020-07-31
category: Programming
description: マークダウン記事の表示サンプルです
tags:
  - markdown
  - html
---


## 見出し2
### 見出し3
#### 見出し4

## リスト
### 順番なしリスト

- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

### 順番なしリスト②

* リスト1
    * ネスト リスト1_1
        * ネスト リスト1_1_1
        * ネスト リスト1_1_2
    * ネスト リスト1_2
* リスト2
* リスト3

### 順番ありリスト

1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3


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

## コード表示
`import React from "react"`


###  シンタックスハイライター
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

### マーカー
<span style="background: linear-gradient(transparent 70%, #cde3ce 70%);">緑のマーカー</span>

<span style="background: linear-gradient(transparent 70%, #f2b1a4 70%);">ピンクのマーカー</span>

### 見出し飾り枠

<div style="position:relative;border:1px solid #F6BCAC;border-radius:6px;padding:25px 20px;margin:30px;font-size:0.8rem;">
  <span style="position:absolute; top: -12px;left: 10px;padding: 5px 20px;background-color: #fffcf5;border-radius:4px;color:#F6BCAC;line-height: 1em;font-size:0.8rem;">
    ここに見出し
  </span>
  ここに本文が入る
</div>
<div style="position:relative;border:1px solid #91c294;border-radius:6px;padding:25px 20px;margin:30px;font-size:0.8rem;">
  <span style="position:absolute; top: -12px;left: 10px;padding: 5px 20px;background-color: #91c294;border-radius:4px;color:#fff;line-height: 1em;font-size:0.8rem;">
    ここに見出し
  </span>
  ここに本文が入る
</div>


### 背景色あり
<div style="background-color:#cde3ce;border-radius:6px;padding:25px 20px;margin:30px;font-size:0.8rem;">
  ここに本文が入る
</div>

### 角丸飾り枠

<div style="border:1px solid #f2b1a4;border-radius:6px;padding:25px 20px;margin:30px;font-size:0.8rem;">
  ここに本文が入る
</div>

<div style="border:1px solid #91c294;border-radius:6px;padding:25px 20px;margin:30px;font-size:0.8rem;">
  ここに本文が入る
</div>

### 角飾り枠

<div style="border:2px solid #f2b1a4;padding:25px 20px;margin:30px;font-size:0.8rem;">
  ここに本文が入る
</div>

<div style="border:4px double #cde3ce;border-radius:6px;padding:25px 20px;margin:30px;font-size:0.8rem;">
  ここに本文が入る
</div>
