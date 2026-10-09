export default {
  lang: 'zh-CN',
  title: '术曲日语学习工作台',
  description: '从Vocaloid歌词学习日语语法、生词',
  base: '/vocaloid-japanese-workbench/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '术曲库', link: '/songs/example-song' },
      { text: '生词本', link: '/vocab-book' },
      { text: '语法手册', link: '/grammar-bank' }
    ],
    sidebar: [
      {
        text: '术曲学习',
        items: [
          { text: '示例歌曲', link: '/songs/example-song' }
        ]
      }
    ]
  }
}
