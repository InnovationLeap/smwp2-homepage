import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SMWP 2",
  description: "Next generation of Super Mario Worker Project, created by INNOVATION LEAP",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/smwp2-logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/smwp2-logo.png',
    nav: [
      { text: '首页', link: '/' },
      //{ text: '特性', link: '/features' },
      //{ text: '下载', link: '/downloads' },
      { 
        text: '2.0.0-alpha.0',
        items: [
          { text: '1.7 (LTS)',
            link: 'https://smwp.marioforever.net/1.7/'
          },
          { text: '历史版本',
            link: 'https://smwp.marioforever.net/downloads/'
          }
        ]
      },
      { text: '社区', link: 'https://www.marioforever.net/' },
      { text: 'INL 官网', link: 'https://inleap.marioforever.net/' }
    ],

    sidebar: [
      {
        text: '特性',
        items: [
          { text: 'SMWP 2 特性', link: '/features' }
        ]
      },
      {
        text: '下载',
        items: [
          { text: '下载 SMWP 2', link: '/downloads' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InnovationLeap/super-mario-worker-project-2' }
    ],

    footer: {
      copyright: 'Copyright © 2025 <a href="https://inleap.marioforever.net/" target="_blank">INNOVATION LEAP</a>. Mario and its related copyrights belong to Nintendo.'
    }
  }
})
