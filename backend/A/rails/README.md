# バックエンド課題 A

## テーブル

- Itemテーブル


| Field      | Type        | Null | Key | Default | Extra          |
|------------|-------------|------|-----|---------|----------------|
| id         | bigint      | NO   | PRI | NULL    | auto_increment |
| name       | varchar(30) | NO   | UNI | NULL    |                |
| price      | int         | NO   |     | NULL    |                |
| created_at | datetime(6) | NO   |     | NULL    |                |
| updated_at | datetime(6) | NO   |     | NULL    |                |

## API

#### 登録API

- Request

POST /items
```
curl -i --location --request GET 'http://localhost:9001/items' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": apple,
  "price": 200
}'
```

- Response

正常系 200
```JSON
{
  "message": "success"
}
```

異常系(入力エラー) 400
```JSON
{
    "name": [
        "has already been taken"
    ]
}
```

#### 一覧API

- Request

```
curl -i --location --request GET 'http://localhost:9001/items'
```

- Response

```JSON
[
    {
        "name": "orange",
        "price": 3000
    },
    {
        "name": "apple",
        "price": 200
    },
]
```
