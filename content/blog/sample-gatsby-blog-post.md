---
title: 記事のサンプル
date: 2017-01-01
updateDate: 2020-07-31
category: diary
description: マークダウン記事の表示サンプルです
tags:
  - markdown
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

<a href="https://www.google.co.jp/" target="_blank" rel="noopener noreferrer">Google</a>

[内部リンク](https://0forest.com)

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
<span class="marker">マーカー</span>

### Box

<div class="title-box">
  <span>ここに見出し</span>
  ここに文章が入ります。
</div>

<div class="border-box">
  ここに文章が入ります。
</div>

<div class="simple-box">
  <div>見出し</div>
  ここに文章が入ります。
</div>

<div class="related-posts">
  <span>こちらの記事もおすすめです</span>

* [活動記録1](/diary-202003/)

* [活動記録2](/diary-202005/)

* [活動記録3](/diary-202007/)

</div>