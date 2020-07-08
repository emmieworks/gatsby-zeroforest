---
title: WordPressテーマに検索機能をつける
date: 2018-07-13T19:00:27+09:00
featured: 20180713-icatch.jpg
category: WordPress
tags:
  - WordPressテーマ自作
status: published
---

## 検索フォームを作る

### searchform.phpを作る

WordPressにはデフォルトで検索フォームが用意されています。 デザインを好みに合わせて作りたいときにはsearchform.phpを用意します。

```php:title=searchform.php
<form method="get" action="<?php echo home_url('/'); ?>">
    <input type="text" name="s" />
    <input type="submit" value="search" />
</form>
```
あとは、CSSをカスタマイズして、見栄えを整えてくださいね。 検索フォームを表示させたい場所には以下のコードを書いてください。
```php
<?php get_search_form(); ?>
```

## 検索結果を表示するテンプレートを作る

### テンプレートの優先順位

検索結果用の表示ページは主にsearch.phpを使います。
1. search.php
2. index.php

### search.phpを作る

```php:title=search.php
<? // search.php
php get_header();?>
    <main>
        <div class="container">
            <h1><?php the_search_query(); ?>の検索結果 : <?php echo $wp_query->found_posts; ?>件</h1>
                <div class="blog-archive">
                    <?php if(have_posts()):
                        while(have_posts()):
                            the_post(); ?>
                            <article id="post-<?php the_ID(); ?>" <?php post_class();?>>
                                <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
                                <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                                <?php the_category(', '); ?>
                                <?php if( get_the_post_thumbnail() ) { ?>
                                    <a href="<?php the_permalink(); ?>" rel="nofollow"><?php the_post_thumbnail(); ?></a>
                                <?php } ?>
                                <?php the_excerpt(); ?>
                            </article>
                        <?php endwhile;
                            else : ?>
                                <p><?php the_search_query(); ?>に関する投稿は見つかりませんでした。もう一度サイト内を検索するには、以下の検索フォームをご利用ください。</p>
                                <p><?php get_search_form(); ?></p>
                        <?php endif; ?>
                </div>
                <?php get_sidebar(); ?>
    </div>
</main>
<?php get_footer(); ?>
```

タイトルは「[検索キーワード]の検索結果：X件」になります

`the_search_query();` ：検索キーワードを表示

`echo $wp_query->found_posts;`：検索された記事の件数を表示する

見つからなかった場合には、もう一度検索してもらうために、検索フォームを表示させています。
