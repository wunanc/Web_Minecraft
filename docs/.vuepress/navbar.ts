/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { 
    text: '🏠首页',
    link: '/',
  },
  { 
    text: '📝新鲜事', 
    link: '/news/' 
  },
  {
    text: '⭐原创插件',
    items: [
      { 
        text: '暂无', 
        link: '/' 
      }
    ]
  },
  {
    text: '🧩附属插件',
    items: [
      { 
        text: '【领地飞行】DomFly', 
        link: '/domfly/'
      }
    ]
  },
  {
    text: '🔧二创插件',
    items: [
      { 
        text: '暂无', 
        link: '/' 
      }
    ]
  },
])
