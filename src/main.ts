import type { Plugin } from 'vue'

import components from './components'
export default components

export const HakoPlugin: Plugin = {
  install(app) {
    Object.entries(components).forEach(([key, value]: [string, any]) => {
      app.component(key, value)
    })
  },
}

// START_EXPORTS
export { default as Hako } from './components/Hako.vue'
// END_EXPORTS
