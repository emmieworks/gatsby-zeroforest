---
title: 【Python】Livedoorのバックアップデータ（backup.txt）をWordPress移行用に置き換える
date: 2020-05-30T19:53:00+09:00
category: WebNote
tags:
  - Python
  - WordPress
status: published
---

 Livedoorブログの記事データをWordPressへと移行する際に、いくつか記事データの内容を書き換える必要があります。


> ①画像のURL
> 旧： https://livedoor.blogimg.jp/ライブドアID/imgs/●/●/
> 新： https://独自ドメイン/wp-content/uploads/images/
>
> ②タグ（タグ未使用の場合は設定不要）
> 旧：TAG
> 新：TAGS
>
> ③内部リンク
> 旧：http://blog.livedoor.jp/ライブドアID/archives/
> 新：https://独自ドメイン/archives/
>
> ④記事を下書き状態に
>
> 旧：STATUS: Publish
> 新：STATUS: Draft
>
> </move-livedoor-to-wordpress/>

テキストエディタで変換してもいいのですが、ミスや手間を減らすために、Pythonでプログラムを書いてみました。

## 文字列置き換えプログラム

```python:title=replace.py
import re
import os

current_url = "https://livedoor.blogimg.jp/zeroforest" # 現在のHPのURL
new_url = "http://sample.local" # 新しいHPのURL
img_dir_path = "/wp-content/uploads/images/" #WordPressの画像アップロードファイル
img_pattern = current_url+r'/*imgs/[\w/:%#\$&\?\(\)~\.=\+\-]+'

original_file_path = "./backup.txt" # ファイル名
new_file_path ="./backup_updated.txt" #更新後のファイル

new_lines = ''

with open(original_file_path, "r") as f:

    for line in f:
      # TAGをTAGSに変換
      line = re.sub("TAG: ","TAGS: ",line)

      # 画像URLをWordPressの画像アップロード先に変更
      img_url_list = re.findall(img_pattern, line)
      for image_url in img_url_list:
        line = re.sub(image_url,new_url+img_dir_path+os.path.basename(image_url),line)

      # 記事状態を下書きに変更
      line = re.sub("STATUS: Publish","STATUS: Draft",line)

      # 旧URLを親URLに変更
      line = re.sub(current_url,new_url,line)

      # パーマリンクから.htmlを削除
      #if(re.match(r'PATH: ', line)):
      #  print(line)
      #  line = re.sub(r'.html$','',line)

      new_lines += line

with open(new_file_path, mode='w', encoding='utf-8') as f:
  f.writelines(new_lines)
```

このコードを「replace.py」というファイル名で保存します。

### プログラムの実行

ライブドアブログbackup.txtとプログラムをreplace.pyを同じフォルダにおきます。
```
フォルダ
├─ replace.py
└─ backup.txt
```

script.pyがあるフォルダでターミナルを開いてプログラムを実行すると、backup.txtが書き換わります。

```
 $ python replace.py
```