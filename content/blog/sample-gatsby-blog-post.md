---
title: "記事のサンプル"
date: "2017-01-01"
category: Programming
description: "dummy text"
---

マークダウン記事の表示サンプルです

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
