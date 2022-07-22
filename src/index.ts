

interface MyPluginConfig {
  /* nothing here yet */
}

/**
 * ## Usage in sanity.config.ts (or .js)
 *
 * ```
 * import {createConfig} from 'sanity'
 * import {myPlugin} from 'sanity-plugin-widgetkit'
 *
 * export const createConfig({
 *     /...
 *     plugins: [
 *         myPlugin()
 *     ]
 * })
 * ```
 */
export const widgetKit = createPlugin<MyPluginConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-widgetkit')
  
  return {
    name: 'sanity-plugin-widgetkit',
  }
})
