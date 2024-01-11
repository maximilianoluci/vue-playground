<template>
  <div :dataTestId="dataTestId" class="inline-flex rounded-md shadow-sm">
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      class="m-0.5 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  dataTestId?: string;
  items: { name: string; value: string }[];
}>();
</script>
