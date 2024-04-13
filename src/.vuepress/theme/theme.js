import { getDirname, path } from 'vuepress/utils'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'

const __dirname = getDirname(import.meta.url)

export function localTheme(options) {
  return {
    name: 'local-theme',
    clientConfigFile: path.resolve(__dirname, 'client.js'),
    templateBuild: path.resolve(__dirname, 'templates/build.html'),
    templateDev: path.resolve(__dirname, 'templates/dev.html'),
    plugins: [
      themeDataPlugin({
        themeData: options
      })
    ]
  }
}