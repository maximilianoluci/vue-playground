<template>
  <button
    type="button"
    class="font-medium rounded-lg text-center focus:ring-1"
    :class="computedClass"
    @click="onClick"
  >
    <div class="flex items-center justify-center">
      <svg-icon v-if="icon" :name="icon" :class="computedIconClass" />
      <span v-if="text" :class="icon ? 'ml-3' : ''">{{ text }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "transparent";
  fullWidth?: boolean;
  rounded?: boolean;
  icon?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
}>();

const emit = defineEmits(["click"]);

const computedClass = computed(() => {
  const classes = [];

  if (props.fullWidth) {
    classes.push("w-full");
  }

  if (props.rounded) {
    classes.push("rounded-full");
  }

  switch (props.color) {
    case undefined:
    case null:
    case "primary":
      classes.push(
        "bg-blue-500",
        "hover:bg-blue-800",
        "focus:ring-blue-300",
        "dark:bg-blue-600",
        "dark:hover:bg-blue-700",
        "dark:focus:ring-blue-800",
      );
      break;
    case "secondary":
      classes.push(
        "bg-gray-500",
        "hover:bg-gray-800",
        "focus:ring-gray-300",
        "dark:bg-gray-600",
        "dark:hover:bg-gray-700",
        "dark:focus:ring-gray-800",
      );
      break;
    case "success":
      classes.push(
        "bg-green-500",
        "hover:bg-green-800",
        "focus:ring-green-300",
        "dark:bg-green-600",
        "dark:hover:bg-green-700",
        "dark:focus:ring-green-800",
      );
      break;
    case "danger":
      classes.push(
        "bg-red-500",
        "hover:bg-red-800",
        "focus:ring-red-300",
        "dark:bg-red-600",
        "dark:hover:bg-red-700",
        "dark:focus:ring-red-800",
      );
      break;
    case "warning":
      classes.push(
        "bg-yellow-500",
        "hover:bg-yellow-800",
        "focus:ring-yellow-300",
        "dark:bg-yellow-600",
        "dark:hover:bg-yellow-700",
        "dark:focus:ring-yellow-800",
      );
      break;
    case "info":
      classes.push(
        "bg-cyan-500",
        "hover:bg-cyan-800",
        "focus:ring-cyan-300",
        "dark:bg-cyan-600",
        "dark:hover:bg-cyan-700",
        "dark:focus:ring-cyan-800",
      );
      break;
    case "dark":
      classes.push(
        "bg-gray-500",
        "hover:bg-gray-800",
        "focus:ring-gray-300",
        "dark:text-black",
        "dark:bg-white",
        "dark:hover:bg-gray-200",
        "dark:focus:ring-1",
        "dark:focus:ring-gray-200",
      );
      break;
    case "transparent":
      classes.push("border", "border-none", "focus:outline-none");
  }

  switch (props.size) {
    case "xs":
      classes.push("px-3", "py-2", "text-xs");
      break;
    case "sm":
      classes.push("px-3", "py-2", "text-sm");
      break;
    case "lg":
      classes.push("px-5", "py-3", "text-lg");
      break;
    case "xl":
      classes.push("px-6", "py-3.5", "text-xl");
      break;
    case "base":
    default:
      classes.push("px-5", "py-2.5", "text-base");
      break;
  }

  return classes.join(" ").trim();
});

const computedIconClass = computed(() => {
  const classes = ["inline"];

  switch (props.size) {
    case "xs":
    case "sm":
      classes.push("w-3", "h-3");
      break;
    case "lg":
      classes.push("w-5", "h-5");
      break;
    case "xl":
      classes.push("w-6", "h-6");
      break;
    case "base":
    default:
      classes.push("w-4", "h-4");
      break;
  }

  return classes.join(" ").trim();
});

function onClick() {
  emit("click");
}
</script>
