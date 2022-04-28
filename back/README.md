# Backend

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## DB Migration

TypeORM を用いてデータベースの migration を行う

### DB との接続

ローカルで開発を行う際は `.env` ファイルの、適宜 `DATABASE_HOST` を設定する

例）ローカルホストの FB に接続する場合

```bash
DATABASE_HOST=localhost
```

### DB 構造に変更が入ったとき

```bash
npm run migration:generate [name]
```

上記コマンドで `src/migrations` 内に migration ファイル `{timestamp}-{name}.ts` が作成される

### migration を実行するとき

```bash
npm run migration:run
```

`src/migrations` 内の migration ファイルをもとに migration を実行する

### migration 履歴の確認

```bash
npm run migration:show
```

### seed 値 (DBのテストデータ) を挿入する時

`seed.yml` を編集した後

```bash
npm run seed
```

DBの整合性の問題から、一度 DB を drop してから migration + seed するのがよい。

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
