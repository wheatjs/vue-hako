<script setup lang="ts">
import { ref } from 'vue'

const disableScaling = ref(false)
const width = ref(335)
const height = ref(667)
</script>

<template>
  <div h="screen" bg="dark-900" text="light-500" p="8">
    <button
      z="10"
      position="fixed top-4 left-4"
      bg="teal-500"
      text="teal-900"
      font="bold"
      p="x-4 y-2"
      border="rounded"
      @click="disableScaling = !disableScaling"
    >
      <span v-if="!disableScaling">Disable Sacling</span>
      <span v-else>Enable Sacling</span>
    </button>
    <Hako h="full" :width="width" :height="height" :disable-scaling="disableScaling">
      <div w="full" h="full" bg="dark-700" grid="~" place="items-center content-center">
        <span>This content will scale with your screen size</span>
        <div flex="~" p="4" space="x-4">
          <input
            v-model="width"
            type="number"
            text="center"
            p="x-4 y-2"
            w="24"
            bg="dark-800"
            border="rounded-sm 1 black"
          >
          <input
            v-model="height"
            type="number"
            text="center"
            p="x-4 y-2"
            w="24"
            bg="dark-800"
            border="rounded-sm 1 black"
          >
        </div>
      </div>
    </Hako>
  </div>
</template>

<style>

</style>
