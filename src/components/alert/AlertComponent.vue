<template>
  <div class="p-4 text-sm rounded-lg" :class="computedClass" role="alert">
    <svg-icon v-if="icon" :name="icon" />
    <span :class="icon ? 'ml-3' : ''" class="font-medium"
      >{{ color ? initcap(color) : "Default" }} alert!</span
    >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SvgIcon from "@/components/svg/SvgIcon.vue";

const props = defineProps<{
  text: string;
  icon?: string;
  color?: "info" | "danger" | "success" | "warning" | "dark";
}>();

const computedClass = computed(() => {
  const classes = [];

  switch (props.color) {
    case "info":
      classes.push("text-blue-800", "bg-blue-100", "dark:text-blue-300", "dark:bg-blue-900");
      break;
    case "danger":
      classes.push("text-red-800", "bg-red-100", "dark:text-red-300", "dark:bg-red-900");
      break;
    case "success":
      classes.push("text-green-800", "bg-green-100", "dark:text-green-300", "dark:bg-green-900");
      break;
    case "warning":
      classes.push(
        "text-yellow-800",
        "bg-yellow-100",
        "dark:text-yellow-300",
        "dark:bg-yellow-900",
      );
      break;
    case "dark":
    default:
      classes.push("text-gray-800", "bg-gray-100", "dark:text-gray-300", "dark:bg-gray-900");
      break;
  }

  return classes.join(" ").trim();
});

function initcap(input: string): string {
  if (!input) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
}
</script>
