---
title: 【Python】Livedoorブログの画像を一括ダウンロードするプログラム
date: 2020-05-09T17:25:00+09:00
featured: icatch-20200509.jpg
category: Programming
tags:
  - Python
status: published
---

LivedoorブログからWordPressに移行するときに問題になるのが、画像のこと。

livedoor Blogには画像をエクスポートする機能がないため、スクレイピングツールなどで画像を抽出して保存する必要があります。

Mac用の画像取得ツールが見つからなかったので、Pythonで画像取得プログラムを書いてみました。

## ソースコード

ブログの記事データから、画像のURLを取得してフォルダにダウンロードしています。

```python
import re
import os
import urllib.request
import urllib.error

current_url = "https://livedoor.blogimg.jp/zeroforest" # 現在のライブドアブログURL
img_url = current_url+'/*imgs/[\w/:%#\$&\?\(\)~\.=\+\-]+' # 画像のURLURL

file_name = "backup.txt" # 読み込むファイル名
dir_name = "images" # 画像保存先フォルダ名


def download_file(url, dst_path):
  try:
    with urllib.request.urlopen(url) as web_file:
      data = web_file.read()
      with open(dst_path, mode='wb') as local_file:
        local_file.write(data)
  except urllib.error.URLError as e:
    print(e)

images = [] # 画像URL格納

# backup.txtから、画像URL取得
with open(file_name, "r") as file_data:
  for line in file_data:
    url_list = re.findall(img_url, line)
    for url in url_list:
      images.append(url)

print(str(len(images))+"個の画像を取得します")

# 画像保存先フォルダがなければ作成する。
try:
  os.makedirs(dir_name)
except:
  pass

# 画像のダウンロード
for img in images:
  download_file(img, os.path.join(dir_name, os.path.basename(img)))
```

## 使い方

（pythonがインストールされている前提で説明します。）

実際に使う場合には、`current_url`のところを自分のライブドアブログのURLを入れてください。

コードのファイル名を「script.py」というファイル名で保存します。

```
フォルダ
├─ script.py
└─ backup.txt
```
script.pyと同じフォルダに管理画面からエクスポートした記事データ「backup.txt」を置きます。

script.pyがあるフォルダでターミナルを開いてプログラムを実行します。
```
$ python script.py
```

```
フォルダ
├─ script.py
├─ backup.txt
└─ images
    ├─ 〇〇-s.jpg
    ├─ 〇〇.jpg
```

imagesフォルダに画像が保存されています。

##プログラムの説明

このプログラムでやっていること

1. backup.txtから画像のURLを取得する
2. imagesフォルダを作成する
3. 画像のURLにアクセスし、画像をimagesフォルダにダウンロードする。

