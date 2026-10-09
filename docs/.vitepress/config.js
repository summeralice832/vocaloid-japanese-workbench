import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/vocaloid-japanese-workbench/',
  title: "术曲日语学习工作台",
  description: "基于Vocaloid术曲的日语语法自学知识库",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '歌曲笔记', link: '/songs/' },
      { text: '生词本', link: '/vocab-book.md' },
      { text: '语法库', link: '/grammar-bank.md' },
      { text: 'Copilot指令', link: '/copilot-command.md' },
      { text: '歌词提示词', link: '/full-song-prompt.md' }
    ],
    sidebar: [
      {
        text: "术曲学习笔记",
        items: []
      },
      {
        text: "知识库",
        items: [
 { text: "生词本", link: "/vocab-book.md" },
          { text: "语法汇总", link: "/grammar-bank.md" }
        ]
      },
      {
        text: "AI工具面板",
        items: [
          { text: "Copilot调用指令", link: "/copilot-command.md" },
          { text: "整首歌词提示词", link: "/full-song-prompt.md" },
          { text: "单句提示词库", link: "/prompt-library.md" }
        ]
      }
    ]
  }
})
