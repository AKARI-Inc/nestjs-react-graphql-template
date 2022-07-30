# react-template

モノレポ移行が簡単になるように `front/` 以下でfrontのコードを書くようにしています。

## Git pre-commit hook set up

以下のコマンドを初めに入力することで、commit の前にコードを lint & format できます。

```bash
git config --local core.hooksPath .githooks
cp .env.example .env # .env ファイルのコピー (Git管理しない情報を書いておく)
```

## Set up with local node

VSCode での快適な開発のためにも Docker を使う方もこちらの作業をおすすめします (VSCode の devcontainer の技術がある方はお知らせください)。 

まず、Node と npm をインストールします。Windows の場合は公式サイトからのダウンロードが丸いイメージ。Ubuntu の場合は[こちら](https://qiita.com/seibe/items/36cef7df85fe2cefa3ea)のように、旧バージョンの nodejs, npm を入れ、 n を一度インストールしてから、node の最新版をいれ、旧バージョンを削除するので落ち着いた。Mac はわかりません。


```bash
cd front # back でも同様
npm i # i stands for install
npm start # front
npm run start # back
```

このあと http://localhost:3000 に接続すると、front に接続できます。


## npm パッケージのインストール

```bash
npm i hoge
```

## 開発環境でしか使わない npm パッケージのインストール

```bash
npm i -D fuga
```

で devDependencies に追加される。

[Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) の TypeScrpt 型定義ファイルはこちらでインストールすること。


## Set up with Docker (これでDBも起動する)

```bash
docker-compose build
```

## Start with docker

```bash
docker-compose up
```

このあと http://localhost に接続すると、front に接続できます。

## License (MIT)
Copyright (c) 2022 AKARI Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
