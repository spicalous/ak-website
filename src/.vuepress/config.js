import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { localTheme } from './theme/theme.js'

export default defineUserConfig({
  lang: 'en-US',
  title: "AK LandXcape Architects",
  description: "Bespoke landscape architecture",
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        integrity: 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
        crossorigin: 'anonymous'
      }
    ]
  ],
  bundler: viteBundler(),
  theme: localTheme({
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' }
    ]
  })
})