<template>
  <div class="inline-flex rounded-md shadow-sm">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 rounded-lg m-0.5 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { name: string; value: string }[];
}>();
</script>
