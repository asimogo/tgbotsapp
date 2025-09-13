import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TGBots App',
  tagline: 'Build Telegram bots beautifully',
  favicon: 'img/favicon.ico',

  url: 'https://tgbotsapp.com',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'asimogo',
  projectName: 'tgbotsapp',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,   // 关掉文档
        blog: false,   // 关掉博客
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TGBots App',
      items: [
        { type: 'localeDropdown', position: 'right' }, // 语言切换
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
