import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "术曲日语学习工作台",
  description: "基于Vocaloid术曲的日语语法自学知识库",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '歌曲笔记', link: '/songs/example-song.md' },
      { text: '生词本', link: '/vocab-book.md' },
      { text: '语法库', link: '/grammar-bank.md' }
    ],
    sidebar: [
      {
        text: "术曲学习笔记",
        items: [{ text: "示例模板", link: "/songs/example-song.md" }]
      },
      { text: "个人工具", link: "/vocab-book.md" },
      { text: "语法汇总", link: "/grammar-bank.md" }
    ]
  }
})
