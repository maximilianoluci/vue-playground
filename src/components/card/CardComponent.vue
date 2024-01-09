<template>
  <div>
    <div
      class="relative block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
      :class="computedClass"
    >
      <h5
        v-if="title"
        class="mb-0.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ title }}
      </h5>
      <p v-if="subtitle" class="mb-1 text-xl font-normal text-gray-700 dark:text-gray-400">
        {{ subtitle }}
      </p>
      <div><slot></slot></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title?: string;
  subtitle?: string;
  hover?: boolean;
}>();

const computedClass = computed(() => {
  const classes = [];

  if (props.hover) {
    classes.push("hover:bg-gray-100 dark:hover:bg-gray-700");
  }

  return classes.join(" ").trim();
});
</script>
