---
title: WordPressのテーマにcssとjsを読み込む書き方
date: 2018-08-03T17:00:20+09:00
featured: icatch-20180803.jpg
categories: ["テーマのカスタマイズ"]
tags: ["CSS","JavaScript"]
status: published
---

cssやJSの読み込みを行うときは、WordPressが自動で読み込むファイルと重複しないよう、functions.phpにまとめて記述します

## WordPressテーマにCSSファイルを読み込む

functions.phpで読み込みたいcssファイルを記述します。

```php:title=functions.php
// CSSファイルの読み込み
function add_stylesheet() {
    wp_enqueue_style(
        'style',
        get_template_directory_uri().'/css/style.css'
    );
}
add_action( 'wp_enqueue_scripts', 'add_stylesheet' );
```
このコードでhead内にこんな風にcssファイルのリンクが表示されます。

```markup
<link rel='stylesheet' id='style' type=‘text/css’ href='http://テーマのファイル/css/style.css' media='all' />
```


### CSSを読み込む関数：wp\_enqueue\_style()関数

```php
wp_enqueue_style( $handle, $src, $deps, $ver, $media );
```

* $handle :スタイルの名前
* $src :スタイルシートのURL
* $deps :このスタイルを読みこむ前に、読みこむCSSファイル array('parent-style')のように名前を指定する。初期値はarray()
* $verバージョン番号。初期値はfalse
* $mediamedia属性を指定する。初期値はall

基本的には、スタイルの名前と、スタイルシートのURLの２つを設定すればオッケーです。

enqueはキュー（列）に入れるという意味です。スタイルシートのファイルを読み込む順に列に追加するイメージです。

### CSSファイルの読込み順序を指定する

```php:title=functions.php
function add_stylesheet() {
    wp_enqueue_style(
        'bootstrap', // 読み込み名
        get_template_directory_uri() . '/css/bootstrap.css'
    );
    wp_enqueue_style(
        'style',
        get_template_directory_uri() . '/css/style.css',
        array('bootstrap') // style.cssの前にbootstrap.cssを読み込む
    );
}
add_action( 'wp_enqueue_scripts', 'add_stylesheet' );
```

## WordPressテーマにJSファイルを読み込む

 functions.phpで読み込みたいjavascriptファイルを記述します。

```php:title=functions.php
function add_scripts() {
    wp_enqueue_script(
        'main',
        get_template_directory_uri().'/js/main.js',
    );
}
add_action( 'wp_enqueue_scripts', 'add_scripts');
```
このコードによって、head内にこんな風にjavascriptのファイルが表示されます

```markup
<script type=‘text/javascript’ scr='http://テーマのファイル/js/main.js'></script>
```

### Javascriptを読み込む関数：wp\_enqueue\_script関数

```php
wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );
```

* $handle :スクリプトの名前
* $src :スクリプトのURL
* $deps :このスタイルを読みこむ前に、読みこむjsファイル。array('parent-js')のように、スクリプトの名前を指定する。初期値はarray()
* $ver :バージョン。初期値はfalse
* $in\_footer :スクリプトの配置位置。trueだと</body>の直前。falseだと</head>タグ内に表示される。初期値はfalse.

※基本、最初に読み込まなくて良ければtrueを設定する

補足 wp\_head()とwp\_footer()も記述してください。

* wp\_head()：スクリプトを<head>内に配置する時に使う
* wp\_footer()：スクリプトを</body>前に配置する時に使う

### 【応用編】読み込み順序とスクリプトの表示位置を指定する記述例

```php:title=functions.php
 [function add_scripts() {
    wp_enqueue_script(
        'bootstrap',
        get_template_directory_uri().'/js/bootstrap.min.js',
        array( ),
        false,
        true // /body前に出力
    );
    wp_enqueue_script(
        'main',
        get_template_directory_uri().'/js/main.js',
        array('bootstrap'), // bootstrapの後に読み込む
        false,
        true // /body前に出力
    );
}
add_action( 'wp_enqueue_scripts', 'add_scripts');
```

## 子テーマでcssとjsを読み込むときの注意点

WordPressで子テーマにCSSとJavascriptファイルを読み込む場合には、子テーマのfunctions.phpに記述していきます。

### 子テーマでは、URLを取得する関数が変わる

 テーマファイルのURLを取得する関数は二種類あります

* **get\_template\_directory\_uri()**
* **get\_stylesheet\_directory\_uri()**

親テーマのみの場合、どちらも親テーマのディレクトリになります。

**子テーマを有効化している場合は、それぞれ取得結果のURLが変わります。**

**get\_template\_directory\_uri()関数** → 親テーマのディレクトリ
**get\_stylesheet\_directory\_uri()関数** → 子テーマのディレクトリ

子テーマをカスタマイズするときには、get\_stylesheet\_directory\_uri()を使います。

### ファイルの読み込み順を指定する

1. 親テーマのstyle.css
2. 子テーマのstyle.css
3. 親テーマのmain.js
4. 子テーマのmain.js

親テーマのCSSとJSを読み込んだ後に、子テーマのCSSとJSを読み込むことでファイルを上書きます。

```php:title=functions.php
function add_files() {
    // 親テーマのstyle.cssを読み込む
    wp_enqueue_style(
        'parent-style',
        get_template_directory_uri().'/css/style.css'
    );
    // 子テーマのstyle.cssを読み込む
    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri().'/css/style.css',
        array('parent-style')　// 親テーマのファイルを先に読み込む
    );
    wp_enqueue_script(
        'parent-js',
        get_template_directory_uri().'/js/main.js',
        array(),
        false,
        true
    );
    wp_enqueue_script(
        'child-js',
        get_stylesheet_directory_uri().'/js/main.js',
        array('parent-js'),　　// 親テーマのファイルを先に読み込む
        false,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'add_files');
```

## まとめ
* cssとjsのファイルの読み込みはfunctions.phpに書く
* CSSを読み込む時はwp\_enqueue\_style()、jsファイルを読み込む時はwp\_enqueue\_script()を使う
* 子テーマにファイルを読み込む時には、get\_stylesheet\_directory\_uri()で、子テーマのディレクトリからURLを取得する。

