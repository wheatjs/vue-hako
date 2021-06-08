<p align="center">
  <img src='./public/Hako.svg' alt="VQL" width="600">
</p>

<p align="center">
  A Vue Component to <b>proportionally</b> scale your content
</p>

<h3 align="center">
  <a align="center" href="#">Live Demo</a>
</h3>

## Installation
```bash
npm i vue-hako
```

## Usage

Register the component to be used anywhere in your app.

Inside of `main.js`
```ts
import { createApp } from 'vue'
import { HakoPlugin } from 'vue-hako'
import App from './App.vue'

createApp(App)
  .use(Hako)
  .mount('#app')
```

Or import the component on a per-component basis.

Inside of your component
```html
<script setup>
import { Hako } from 'vue-hako'
</script>

<template>
  ...
</template>
```

Using the component

```html
<script setup>
import { ref } from 'vue'

const disableScaling = ref(false)
const width = ref(1920)
const height = ref(1080)
</script>

<template>
  <div>
    <Hako 
      :width="width" 
      :height="height" 
      :disable-scaling="disableScaling"
    >
      This content will scale to its container
    </Hako>
  </div>
</template>
```

## License

[MIT License](https://github.com/jacobclevenger/vue-hako/blob/main/LICENSE) © 2021-PRESENT [Jacob Clevenger](https://github.com/jacobclevenger)