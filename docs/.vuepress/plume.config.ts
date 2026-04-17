/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERfYppqww4uAYebnNCMaKtKBEKmjtGlwACEycAAhk0WVWMHLpOgLyYZToE.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/wunanc' },
    { icon: 'qq', link: 'https://qm.qq.com/q/bMuLKs8D9S' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/3461562578766467' },
  ],
  navbarSocialInclude: ['github','qq','bilibili'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '本网站与 MOJANG 或 MICROSOFT 无任何关联 <a target="_blank" href="/friends/">友情链接</a>',
    copyright: 'Copyright © 2026-present wunanc.All rights reserved. | <a target="_blank" href="https://beian.miit.gov.cn/">粤ICP备2026043665号-1</a>', // 版权信息
  },

  /**
   * @see https://theme-plume.vuejs.press/config/theme/#profile
   */
  profile: {
    avatar: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERfYppqww4uAYebnNCMaKtKBEKmjtGlwACEycAAhk0WVWMHLpOgLyYZToE.png',
    name: 'Wunanc',
    description: '一个普普通通的文档网站',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  collections,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

})
