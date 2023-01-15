# バックエンド B

## URL

| 機能/画面               |  メソッド     | パス |
|-------------------|-------------|------|
| ルートページ         |  GET        | /   |
| サインアップページ     | GET         | /signup   |
| ログインページ        | GET         | /login   |
| ログイン処理         | POST         | /login  |
| ログアウト処理        | DELETE      | /logout   |
| ユーザー登録処理       | POST       |  /users   |
| ユーザー詳細画面       | GET        | /user/:id   |
| 投稿一覧             | GET        | /posts   |
| 投稿作成処理          | POST       | /posts   |
| 投稿削除処理          | DELETE     | /posts/:id   |

## テーブル

- USER

| Field           | Type         | Null | Key | Default | Extra          |
|-----------------|--------------|------|-----|---------|----------------|
| id              | bigint       | NO   | PRI | NULL    | auto_increment |
| name            | varchar(50)  | NO   |     | NULL    |                |
| email           | varchar(255) | NO   | UNI | NULL    |                |
| password_digest | varchar(255) | NO   |     | NULL    |                |
| created_at      | datetime(6)  | NO   |     | NULL    |                |
| updated_at      | datetime(6)  | NO   |     | NULL    |                |
| remember_digest | varchar(255) | YES  |     | NULL    |                |

- Posts

| Field      | Type        | Null | Key | Default | Extra          |
|------------|-------------|------|-----|---------|----------------|
| id         | bigint      | NO   | PRI | NULL    | auto_increment |
| content    | text        | NO   |     | NULL    |                |
| user_id    | bigint      | NO   | MUL | NULL    |                |
| created_at | datetime(6) | NO   |     | NULL    |                |
| updated_at | datetime(6) | NO   |     | NULL    |                |

## 認証概要

#### ログイン時処理

- ログイン時にユーザーIDをセッションに保存
- Remember meにチェックを入れてログインした場合
  - CookieにユーザーIDを保存
  - ユーザーIDとペアになるRemember Tokenを保存

#### ログイン判定概要

- セッションに適切なユーザーIDが存在する
- Cookieに適切なユーザーIDが存在する かつ CookieのユーザーとペアになるRemember TokenがCookieに存在する

#### ログアウト

- セッション、Cookieのユーザー関連情報を削除する
