---
title: 【初心者向け】MySQLの基本コマンドまとめ
date: 2020-05-17T00:03:00+09:00
featured: icatch-20200510-1.jpg
category: WebNote
tags:
  - MySQL
status: published
---

MySQLデータベースの操作でよく使う基本的なコマンドをまとめました。

まだMySQLをインストールしていない場合
<a href="https://prog-8.com/docs/mysql-env" target="_blank" rel="noopener noreferrer">MySQLの環境構築</a>

```
-- MySQLのバージョン確認
$ mysql --version
```
インストールされているとバージョンが表示されます。

## MySQLサーバーの起動

```
-- MySQLサーバースタート
mysql.server start
```

```sql
$ mysql.server start
Starting MySQL .. SUCCESS!
```

```
-- ログイン
mysql -uroot -p
```

 パスワードを入力してEnterを押すとログイン。

```sql
$ mysql -uroot -p
Enter password:
Welcome to the MySQL monitor. Commands end with ; or \g.
Your MySQL connection id is 9 Server version: 8.0.19 Homebrew Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved. Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners. Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
mysql>
```

```sql
-- MySQLログアウト
exit;
```

```sql
mysql> exit;
Bye
```

```sql
-- MySQLサーバー終了
mysql.server stop
```

```sql
$ mysql.server stop
Shutting down MySQL .. SUCCESS!
```

## データベースの操作(CREATE/DROP)


-- データベース一覧の確認
SHOW databases;


```sql
mysql> SHOW databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| list_app           |
| mysql              |
| performance_schema |
| searchdata_db      |
| sys                |
+--------------------+
6 rows in set (0.00 sec)
```
-- データベースtest作成
CREATE DATABASE test;

```sql
mysql> CREATE DATABASE test; Query OK, 1 row affected (0.00 sec) mysql> SHOW databases; +--------------------+ | Database | +--------------------+ | information\_schema | | list\_app | | mysql | | performance\_schema | | searchdata\_db | | sys | | test | +--------------------+ 7 rows in set (0.00 sec)
```

データベースtest選択
USE test;

```sql
mysql> USE test;
Database changed
```

-- テーブル一覧表示
SHOW TABLES FROM test;

-- テーブル作成
CREATE TABLE items(
 id INT(11) AUTO\_INCREMENT NOT NULL,
 name VARCHAR(30) NOT NULL ,
 price INT(11) NOT NULL ,
 PRIMARY KEY (id));

```sql
mysql> CREATE TABLE items(
    ->   id INT(11) AUTO_INCREMENT NOT NULL,
    ->   name VARCHAR(30) NOT NULL ,
    ->   price INT(11) NOT NULL ,
    ->   PRIMARY KEY (id));
Query OK, 0 rows affected, 2 warnings (0.02 sec)
```

よく使うデータ型

型名  データ型    値の範囲
INT 整数型 -2147483648～2147483647
FLOAT   単精度浮動小数点型   3.402823466E+38～3.402823466E+38
CHAR(m) 文字列（固定長）    m（文字数指定）：0～255文字
VARCHAR(m)  文字列（可変長）    m（バイト数指定）：0～65535バイト
DATE    日付型 ‘YYYY-MM-DD’
DATETIME    日付時刻型   ‘YYYY-MM-DD HH:MM:SS’
TIMESTAMP   日付時刻型   ‘YYYY-MM-DD HH:MM:SS’

-- テーブルの表示
DESC items;

```sql
mysql> DESC items;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int         | NO   | PRI | NULL    | auto_increment |
| name  | varchar(30) | NO   |     | NULL    |                |
| price | int         | NO   |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)
```

テーブルの削除
DROP TABLE items;

```sql
mysql> DROP TABLE items;
Query OK, 0 rows affected (0.03 sec)
```

データベースの削除
DROP DATABSE test;

```sql
mysql> DROP DATABASE test;
Query OK, 0 rows affected (0.01 sec)

mysql> SHOW databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| list_app           |
| mysql              |
| performance_schema |
| searchdata_db      |
| sys                |
+--------------------+
6 rows in set (0.00 sec)
```

## データの操作（SELECT/UPDATE/DELETE）

INSERT文
INSERT items(name,price) VALUES ('じゃがいも',200);
INSERT items(name,price) VALUES ('さつまいも',300);
INSERT items(name,price) VALUES ('にんじん',100);

```sql
mysql> INSERT items(name,price) VALUES ('じゃがいも',200);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT items(name,price) VALUES ('さつまいも',300);
Query OK, 1 row affected (0.00 sec)

mysql> INSERT items(name,price) VALUES ('にんじん',100);
Query OK, 1 row affected (0.00 sec)
```

-- SELECT文
SELECT * FROM items;

```sql
mysql> SELECT * FROM items;
+----+-----------------+-------+
| id | name            | price |
+----+-----------------+-------+
|  1 | じゃがいも      |   200 |
|  2 | さつまいも      |   300 |
|  3 | にんじん        |   100 |
+----+-----------------+-------+
3 rows in set (0.00 sec)
 ```


-- SELECT
SELECT id, price, name
FROM items
WHERE price = 300
ORDER BY id ASC;

WHEREで表示するデータの条件を指定します。複数ある場合はANDでつなげることができます。

ORDER BYでソートする条件を記載します。（ここではidをASC昇順で表示。降順の場合はDESC。）

「,」で複数条件記載可能

```sql
mysql> SELECT id, price, name
    -> FROM items
    -> WHERE price = 300
    -> ORDER BY id ASC;
+----+-------+-----------------+
| id | price | name            |
+----+-------+-----------------+
|  2 |   300 | さつまいも      |
+----+-------+-----------------+
1 row in set (0.00 sec)
```

-- UPDATE
UPDATE items
SET name = 'さといも', price = 400
WHERE id = 2;

```sql
mysql> UPDATE items
    -> SET name = 'さといも', price = 400
    -> WHERE id = 2;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
mysql> SELECT * FROM items;
+----+-----------------+-------+
| id | name            | price |
+----+-----------------+-------+
|  1 | じゃがいも      |   200 |
|  2 | さといも        |   400 |
|  3 | にんじん        |   100 |
+----+-----------------+-------+
3 rows in set (0.00 sec)
```

-- DELETE
DELETE FROM items WHERE id=1;

```sql
mysql> DELETE FROM items WHERE id=1;
Query OK, 1 row affected (0.00 sec)

mysql> SELECT * FROM items;
+----+--------------+-------+
| id | name         | price |
+----+--------------+-------+
|  2 | さといも     |   400 |
|  3 | にんじん     |   100 |
+----+--------------+-------+
2 rows in set (0.00 sec)
```

WHEREで削除するデータの条件を指定します。指定しないと全データ削除になります。
