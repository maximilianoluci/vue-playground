<template>
  <div
    class="flex items-center rounded border border-gray-300 bg-gray-200 p-4 dark:border-gray-900 dark:bg-gray-800"
  >
    <div class="flex h-5 items-center">
      <input
        :id="boxId"
        :aria-describedby="helperId"
        type="checkbox"
        value=""
        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
    </div>
    <div class="ms-2 text-sm">
      <label :for="boxId" class="font-medium text-gray-900 dark:text-gray-300">{{ text }}</label>
      <p
        v-if="subtitle !== null"
        :id="helperId"
        class="text-xs font-normal text-gray-500 dark:text-gray-300"
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  id?: string;
  text: string;
  subtitle?: string;
}>();

const boxId = computed<string>(() => `${props.id}-menu`);
const helperId = computed<string>(() => `${props.id}-description`);
</script>
