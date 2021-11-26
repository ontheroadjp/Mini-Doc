# Setup

## インストール
このリポジトリをクローンし ``npm install`` を実行するだけで使うことができます。好きな場所にクローンしてください。

```bash
$ git clone https://github.com/ontheroadjp/Mini-Doc
$ cd Mini-Doc
$ npm install
```

以上で、インストール完了です。

### インストールの確認

``Mini-Docs`` ディレクトリに移動してから ``npm run docs:dev`` コマンドを実行すると、内包されている WEB サーバーが起動します。

WEB ブラウザを起動して ``localhost:8080`` にアクセスしてみてください。

Mini Doc のページが表示されればインストール成功です。

```bash
$ cd Mini-Docs
$ npm run docs:dev
```

お疲れ様でした。

無事にインストールが完了したら、必要に応じてサイトの設定をしてください。

## サイトの設定

サイト全体の設定は ``docs/.vuepress/config.js`` で行います。

### 基本設定

サイトタイトル、サイト言語、サイトの説明を変更する場合は、以下を変更します。
上段（``/``）が英語版サイト、下段（``/ja/``）が日本語版サイトの設定です。

```bash
module.exports = {
    ...
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Mini Doc',
            description: 'Simple and Usuful Application',
        },
        '/ja/': {
            lang: 'ja-JP',
            title: 'Mini Doc',
            description: 'Simple and Usuful Application',
        },
    },
    ...
}
```

### ベースディレクトリ

以下の ``/Mini-Doc/`` の場所を任意の場所に変更します。実際のディレクトリ構造は変更する必要はありません。

``docs/`` ディレクトリの内容が ``base`` で指定した URL で表示されます。

```bash
module.exports = {
    ...
    base: '/Mini-Doc/'
    ...
}
```

### OGP

OGP の設定を変更する場合は以下それぞれの ``content`` を変更します。

```bash
module.exports = {
    ...
    head: [
        ['meta', { name: 'og:url', content: 'https://ontheroadjp.github.com/Mini-Doc/' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:title', content: 'Mini Doc' }],
        ['meta', { name: 'og:description', content: 'Simple and Useful Application' }],
        ['meta', { name: 'og:image', content: 'https://ontheroadjp.github.io/Mini-Doc/images/main.jpg' }],
        ...
    },
    ...
}
```

### Twitter カード

[Twitter カード](https://developer.twitter.com/ja/docs/tweets/optimize-with-cards/guides/getting-started)の設定をする場合は以下の ``content`` の内容を変更します。

```bash
module.exports = {
    ...
    head: [
        ['meta', { name: 'og:url', content: 'https://ontheroadjp.github.com/Mini-Doc/' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:title', content: 'Mini Doc' }],
        ['meta', { name: 'og:description', content: 'Simple and Useful Application' }],
        ['meta', { name: 'og:image', content: 'https://ontheroadjp.github.io/Mini-Doc/images/main.jpg' }],
        ...
    },
    ...
}
```

### その他設定

その他設定は VuePress の公式マニュアルをご確認ください。

公式マニュアル: [Config | VuePress](https://v2.vuepress.vuejs.org/reference/config.html#base)


## アンインストール

``Mini-Doc`` ディレクトリを削除すればアンインストール完了です。

::: danger
アンインストールすると制作したサイトデータも失くなってしまいますのでご注意ください。
:::

Mini-Doc はサイトデータを ``docs/.vuepress/dist`` ディレクトリに出力します。

制作したサイトデータを残したい場合には ``docs/.vuepress/dist`` ディレクトリを別の場所にコピーしてから ``Mini-Doc`` ディレクトリを削除してください。


以上で完了です。

