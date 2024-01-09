<template>
  <span class="me-2 rounded px-2.5 py-0.5 text-xs font-medium" :class="computedClass">{{
    text
  }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text: string;
  icon?: string;
  color: string;
}>();

const computedClass = computed(() => {
  const classes = [];

  if (props.color) {
    classes.push(
      `text-${props.color}-800`,
      `bg-${props.color}-100`,
      `dark:text-${props.color}-300`,
      `dark:bg-${props.color}-900`,
    );
  } else {
    classes.push("text-gray-800", "bg-gray-100", "dark:text-gray-300", "dark:bg-gray-900");
  }

  return classes.join(" ").trim();
});
</script>
