# usage

## Commands

There are two commands available in Mini Doc.

- ``npm run docs:dev`` for development
- ``npm run docs:build`` Output HTML

### Command for development

```bash
$ npm run docs:dev
```
A web server accessible via ``localhost:8080`` will be started.
Live reload is enabled.

### Command for generating HTML files

```bash
$ npm run docs:dev
```

The output will be in the ``docs/.vuepress/dist`` directory.

## Edit the pages
Edit the markdown file (``README.md``) corresponding to each page.

::: tip
You can start the web server with npm run docs:dev for live reload.
:::

## File Structure
The ``.md`` files that form the basis of the website are located in the ``docs/`` directory.
The ``docs`` directory has the following structure. (The ``docs/.vuepress`` directory is excluded.)

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

The ``README.md`` file in each directory will be the file to edit.

### English site

|Page|File|
|:---|:---|
|HOME page|``README.md``|
|Overview page|``overview/README.md``|
|Setup page|``setup/README.md``|
|Usage page|``usage/README.md``|

### Japanese site

|Page|File|
|:---|:---|
|HOME page|``ja/README.md``|
|Overview page|``ja/overview/README.md``|
|Setup page|``ja/setup/README.md``|
|Usage page|``ja/usage/README.md``|

## Static files
Static files such as images should be placed in ``docs/.vuepress/public``.
From the web page, you can access the ``docs/.vuepress/public`` directory with ``. /``.
For example, if you set up an image file named ``docs/.vuepress/public/images/main.jpg``, you can access it with

```html
<img src='./images/main.jpg' />
```

## Deploying to GitHub Pages
Mini Doc includes GitHub Actions for easy deployment to GitHub Pages.

If you set the base of ``docs/.vuepress/config.js`` to ``/[repository name]/``, a git push to the master directory will automatically build and deploy to the ``gh-pages`` branch.

::: tip
You do not need to create a gh-pages branch in advance.
:::

All you need to do is to specify the GitHub Pages public setting to ``/(root)`` of gh-pages, and you can access it at ``[username].github.io/[repository name]``.

### Stop automatic build
If you don't want to do an automatic build, delete the ``.github`` directory.

