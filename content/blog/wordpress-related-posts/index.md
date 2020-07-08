---
title: WordPressテーマに関連記事を表示する
date: 2018-07-26T19:00:38+09:00
featured: 20180726-icatch.jpg
category: WordPress
tags:
  - WordPressテーマ自作
status: published
---

ブログ記事の下の方によくある「関連記事」を作って、同じカテゴリーの記事を表示します。

## 関連記事を表示するコード
まずは記載するコードを紹介します。 投稿ページ（single.php）のファイルで、関連記事を表示したい箇所に以下のように記述します。

```php:title=single.php
<?php if(has_category()){ // ①サブクエリを取得する
    //①-1 表示している記事のカテゴリー情報を取得する
    $cats = get_the_category();
    //①-2 カテゴリー情報からカテゴリーIDを配列に入れる
    $cat_id = array();
    foreach($cats as $data){
        $cat_id[] = $data -> cat_ID;
        }
}
// ①-3 カテゴリが同じ記事データをサブクエリに取得する
$myposts = get_posts( array(
    'post_per_page' => '5', // 5件
    'category__in' => $cat_id, // カテゴリーID
    'exclude' => array($post ->ID), // 表示中の記事は除く
    'orderby' => 'rand', // ランダムで取得する
));

// ②サブクエリで取得した記事データを表示する
if($myposts) : // ②-1 記事があれば　?>
    <aside class="related-menu">
        <h2>関連記事</h2>
        <ul>
            <?php foreach($myposts as $post): // ②-2 各記事データについて以下の処理を行う
                setup_postdata($post);// ②-3 記事リストから次の記事データを取得する?>
                <li><a href="<?php the_permalink(); ?>">
                    <?php if ( has_post_thumbnail() ) {
                        the_post_thumbnail(); // ②-4 サムネイルを表示
                    }
                    the_title(); // ②-4 タイトルを表示　?></a>
                </li>
            <?php endforeach; ?>
        </ul>
    </aside>
<?php wp_reset_postdata(); // ②−４ サブクエリの処理終わり。メインクエリに戻る
endif; ?>
```

## コードの説明

WordPressではアクセスしたURLに紐づくコンテンツ（タイトル、カテゴリー、記事本文、サムネイルなど）は自動取得してくれます。

関連記事は、自動取得されるコンテンツには含まれない情報なので、新たに記事データを取得する必要があります。

* WordPressが記事を表示する仕組み(/wordpress-query/)

大きく２つの処理をしています。

①サブクエリ（メインの記事データにない情報）を取得する

はじめにカテゴリー情報を取得した後、get\_posts()でどの記事データのリストを取得します。

```php
$myposts = get_posts( array(
    'post_per_page' => '5', // 5件
    'category__in' => $cat_id, // カテゴリーID
    'exclude' => array($post ->ID), // 表示中の記事は除く
    'orderby' => 'rand', // ランダムで取得する
));
```

()内には、データの条件を指定しています。
条件を満たした記事データをmypostsに入ります。

②サブクエリから記事を取得して表示する

```php
if($myposts) : // ②-1 記事があれば
    foreach($myposts as $post): // ②-2 各記事データについて以下の処理を行う
        setup_postdata($post); // ②-3 記事リストから次の記事データを取得する
        // ②-④ ここで記事を表示するコードを書く
    endforeach;
    wp_reset_postdata(); // ②−５ サブクエリの処理終わり。メインクエリに戻る
endif;
```

setup\_postdata($post)で、今回取得した記事データについて、タイトル表示the\_title()やサムネイル表示the\_post\_thumbnailなど、記事表示用の関数が使えるようになります。

wp\_reset\_postdataではサブの記事データ→メインの記事データに処理を切り替える処理をしています。

* メイン：投稿の記事のデータ
* サブ：関連記事の記事データ

このページではメインとサブ２種類記事データを処理しているので、これがないと、以降の表示がおかしくなってしまうことがあります。

## 表示されるHTML

```markup
<aside class="related-menu">
    <h2>関連記事</h2>
    <ul>
        <li><img src="アイキャッチ画像><a href="記事１のURL">記事１の名前</a></li>
        <li><img src="アイキャッチ画像><a href="記事２のURL">記事２の名前</a></li>
        <li><img src="アイキャッチ画像><a href="記事３のURL">記事３の名前</a></li>
        <li><img src="アイキャッチ画像><a href="記事４のURL">記事４の名前</a></li>
        <li><img src="アイキャッチ画像><a href="記事５のURL">記事５の名前</a></li>
    </ul>
</aside>
```

あとは、CSSをカスタマイズすればOK
