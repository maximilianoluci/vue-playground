<template>
  <div
    @click="toggleUiMode"
    class="w-fit rounded-lg shadow-md m-3 p-3 cursor-pointer bg-red-300 dark:bg-red-700"
  >
    Toggle UI
  </div>
  <div class="mx-auto m-3 p-3 h-auto">
    <card-component title="a">ickkcki2p2ai</card-component>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '../components/card/CardComponent.vue'

let isDarkMode: boolean = false

function toggleUiMode(): void {
  const htmlElement = document.querySelector('html')
  if (htmlElement) {
    isDarkMode = !isDarkMode
    htmlElement.classList.toggle('dark', isDarkMode)
  }
}
</script>
