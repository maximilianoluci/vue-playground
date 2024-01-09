<template>
  <button
    :data-popover-target="popoverId"
    type="button"
    class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {{ buttonLabel }}
  </button>

  <div
    data-popover
    :id="popoverId"
    role="tooltip"
    class="invisible absolute z-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
  >
    <div
      class="rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
    >
      <h3 v-if="title !== null" class="font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
    </div>
    <div v-if="content !== null" class="px-3 py-2">
      <p>{{ content }}</p>
    </div>
    <div data-popper-arrow></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  id: string;
  buttonLabel: string;
  title?: string;
  content?: string;
}>();

const popoverId = computed<string>(() => `${props.id}-popover`);
</script>
