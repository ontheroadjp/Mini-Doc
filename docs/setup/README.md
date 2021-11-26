# Setup

## Install
To use it, simply clone this repository and run npm install. You can clone it to any location you like.
```bash
$ git clone https://github.com/ontheroadjp/Mini-Doc
$ cd Mini-Doc
$ npm install
```
The installation is now complete.

### Checking the installation
Go to the Mini-Docs directory and run the ``npm run docs:dev`` command to start the included web server.

Launch your web browser and try to access ``localhost:8080``.

If you see the Mini Doc page, the installation is successful.

```bash
$ cd Mini-Docs
$ npm run docs:dev
```

## Site configuration
Configuration of the entire site is done in ``docs/.vuepress/config.js``.

### Basic settings
If you want to change the site title, site language, and site description, change the following.
The top row ``(/)`` is for the English site, and the bottom row ``(/ja/)`` is for the Japanese site.

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

### Base Directory
Change the location of ``/Mini-Doc/`` below to a location of your choice. You do not need to change the actual directory structure.

The contents of the ``/docs/`` directory will be displayed with the URL specified in ``base``.

```bash
module.exports = {
    ...
    base: '/Mini-Doc/'
    ...
}
```

### OGP
To change the OGP settings, change the ``content`` section of each of the following

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

### Twitter Cards
To set up [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards), change the following content.

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

### Other Settings
For other settings, please refer to the official VuePress manual.
Official Manual: [Config | VuePress](https://v2.vuepress.vuejs.org/reference/config.html#base)


## Uninstallation
Delete the Mini-Doc directory to complete the uninstallation.

::: danger
Please note that if you uninstall the software, you will also lose the site data you have created.
:::

Mini-Doc outputs site data to the ``docs/.vuepress/dist`` directory.

If you want to keep the site data you created, copy the ``docs/.vuepress/dist`` directory to another location and delete the ``Mini-Doc`` directory.

It's all done.




