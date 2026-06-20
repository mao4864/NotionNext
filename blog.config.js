// 注：process.env.XX是Vercel的环境变量

const config = {
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo',
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021,

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,
  REVALIDATION_TOKEN: process.env.REVALIDATION_TOKEN || '',
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light',
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '视频工具站',
  BIO: process.env.NEXT_PUBLIC_BIO || 'AE插件 · 视频教程 · 实用工具 · LOL绝活',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://tangly1024.com',
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'AE插件,PR预设,视频教程,实用工具,LOL,绝活',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',

  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/ai.config'),
  ...require('./conf/performance.config'),
  ...require('./conf/top-tag.config'),

  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,

  ...require('./conf/techgrow.config'),

  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'AE插件, 视频教程, 实用工具, LOL绝活, 欢迎来到我的网站',

  UUID_REDIRECT: process.env.UUID_REDIRECT || false
};

module.exports = config;
