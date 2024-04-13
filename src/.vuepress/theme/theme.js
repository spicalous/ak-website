import { getDirname, path } from 'vuepress/utils'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'

const __dirname = getDirname(import.meta.url)

export function localTheme(options) {
  return {
    name: 'local-theme',
    clientConfigFile: path.resolve(__dirname, 'client.js'),
    plugins: [
      themeDataPlugin({
        themeData: options
      })
    ]
  }
}