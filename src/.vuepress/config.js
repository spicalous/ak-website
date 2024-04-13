import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { localTheme } from './theme/theme.js'

export default defineUserConfig({
  base: '/ak-website/',
  lang: 'en-US',
  title: "AK LandXcape Architects",
  description: "Bespoke landscape architecture",
  bundler: viteBundler(),
  theme: localTheme({
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' }
    ]
  })
})