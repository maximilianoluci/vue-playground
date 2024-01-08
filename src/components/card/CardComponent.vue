<template>
  <div>
    <div
      class="block relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      :class="computedClass"
    >
      <h5 v-if="title" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ title }}
      </h5>
      <p v-if="text" class="font-normal text-gray-700 dark:text-gray-400">
        {{ text }}
      </p>
      <div><slot></slot></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title?: string;
  text?: string;
  hover?: boolean;
}>();

const computedClass = computed(() => {
  const classes = [];

  if (props.hover) {
    classes.push('hover:bg-gray-100 dark:hover:bg-gray-700');
  }

  return classes.join(' ').trim();
});
</script>
