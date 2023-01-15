# バックエンド C

- 下記の様に定義したテーブルがあります。ジャンルごとのitems.priceの平均値とジャンル名を取得したいと思っています
- どの様なクエリを発行するべきでしょうか？理由もつけて回答してください
- idカラム以外はインデックスを貼っていません。もし貼っておいた方が良いインデックスがあれば教えてください。こちらも理由をつけて回答してください

## 回答

- クエリ例(Mysql 5.7)

```SQL

SELECT AVG(i.price), g.name FROM items i
INNER JOIN genres g on g.id = i.genders.id
GROUP BY g.id;
```

### クエリ内容

  - genresテーブルのIDとitemsテーブルのgenres_idが一致するもので`INNER JOIN`する(genres_idがnullのレコードも集計する場合は`LEFT JOIN`を使用する)
  - `GROUP BY`でgenresのIDを指定してグループ化する
  - グループ化されたジャンル名、items.priceの平均値をAVG関数で集計し取得する。

理由
  - プライマリキーを使用することで、インデックスを有効にし、一時テーブルの作成を回避するため、`GROUP BY`に使用する値はitems.genres_idではなくgenres.idにする必要があるかと思いました。
  (手元でexplainを使用してSQL文を検証したところ、items.genres_idの場合は、`Using temporary`,`Using filesort`が発生してしまいました)

### インデックスの付与

  - items.genres_idにインデックス(外部キー制約)を付与した方が良いかと思いました。

理由
  - Join時の条件に指定したいカラムのため、インデックスを付与することでインデックス検索を有効にし、
  性能改善が見込めるため
  - 外部キー制約をつけることで、不正なデータのINSERTを未然に防ぐため