# 使い方

## コマンド

Mini Doc では 2つのコマンドが利用できます。

- ``npm run docs:dev`` 開発用
- ``npm run docs:build`` HTML の出力

### 開発用コマンド
```bash
$ npm run docs:dev
```

- ``localhost:8080`` でアクセス可能な WEB サーバーが起動します。
- ライブリリロードが有効です。

### HTML の出力コマンド
```bash
$ npm run docs:build
```
- 出力先は、``docs/.vuepress/dist`` ディレクトリです。

## ページの編集

それぞれのページに対応した markdown ファイル（``README.md``）を編集します。

::: tip
``npm run docs:dev`` で WEB サーバーを起動するとライブリロードが行えます。
:::

### ファイル構造

WEB サイトの元になっている md ファイルは ``docs/`` ディレクトリにあります。

``docs`` ディレクトリは以下の構造になっています。
（``docs/.vuepress`` ディレクトリは除いています）

```bash
docs
├── README.md
├── ja
│   ├── README.md
│   ├── overview
│   │   └── README.md
│   ├── setup
│   │   └── README.md
│   └── usage
│       └── README.md
├── overview
│   └── README.md
├── setup
│   └── README.md
└── usage
    └── README.md
```

それぞれのディレクトリにある ``README.md`` が編集するファイルになります。

### 英語版サイト

|ページ|ファイル|
|:---|:---|
|トップページ|``README.md``|
|概要ページ|``overview/README.md``|
|セットアップページ|``setup/README.md``|
|使い方ページ|``usage/README.md``|

### 日本語版サイト

|ページ|ファイル|
|:---|:---|
|トップページ|``ja/README.md``|
|概要ページ|``ja/overview/README.md``|
|セットアップページ|``ja/setup/README.md``|
|使い方ページ|``ja/usage/README.md``|


## 静的ファイル

### 画像ファイル

画像などの静的ファイルは ``docs/.vuepress/public`` に設置します。

WEB ページからは ``docs/.vuepress/public`` ディレクトリには ``./`` でアクセスできます。

例えば、``docs/.vuepress/public/images/main.jpg`` という画像ファイルを設置した場合は、

```html
<img src='./images/main.jpg' />
```

となります。

## GitHub Pages へのデプロイ

Mini Doc には簡単に GitHub Pages にデプロイするための GitHub Actions が含まれています。

``docs/.vuepress/config.js`` の ``base`` を ``/[リポジトリ名]/`` に設定しておけば、``master`` ディレクトリに ``git push`` すると自動的にビルドされ、``gh-pages`` ブランチにデプロイされます。

::: tip
事前に ``gh-pages`` ブランチの作成は必要ありません。
:::

あとは GitHub Pages の公開設定を ``gh-pages`` の ``/(root)`` に指定すれば、``[ユーザー名].github.io/[リポジトリ名]`` でアクセスすることが可能です。

### 自動ビルドを止める

自動ビルドをしたくない場合には、``.github`` ディレクトリを削除してください。



