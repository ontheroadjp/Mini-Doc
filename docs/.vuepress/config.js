module.exports = {
    base: '/Mini-Doc/',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/Mini-Doc/images/hero02.png' }],
        ['meta', { name: 'og:url', content: 'https://ontheroadjp.github.com/Mini-Doc/' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:title', content: 'Mini Doc' }],
        ['meta', { name: 'og:description', content: 'Simple and Useful Application' }],
        ['meta', { name: 'og:image', content: 'https://user-images.githubusercontent.com/11689129/143543636-a9def72b-544a-4e31-9e6a-239e3c0424f4.png' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@te_ontheroad_jp' }],
        ['meta', { name: 'twitter:title', content: 'Mini Doc' }],
        ['meta', { name: 'twitter:description', content: 'Simple and Useful Application' }],
        ['meta', { name: 'twitter:image', content: 'https://user-images.githubusercontent.com/11689129/143543636-a9def72b-544a-4e31-9e6a-239e3c0424f4.png' }],
    ],
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
    themeConfig: {
        logo: '/images/hero02.png',
        repo: 'ontheroadjp/Mini-Doc',
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    // NavbarItem
                    { text: 'overview', link: '/overview/', },
                    { text: 'setup', link: '/setup/', },
                    { text: 'usage', link: '/usage/', },
                ],
            },
            '/ja/': {
                selectLanguageName: '日本語',
                navbar: [
                    { text: '概要', link: '/ja/overview/', },
                    { text: 'セットアップ', link: '/ja/setup/', },
                    { text: '使い方', link: '/ja/usage/', },
                ],
            },
        },
        docsRepo: 'https://github.com/ontheroadjp/Mini-Doc',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        lastUpdated: 'Last Updated',
    },
}
