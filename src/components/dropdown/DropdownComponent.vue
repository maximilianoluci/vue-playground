<template>
  <button
    :data-testid="dataTestId"
    :id="buttonId"
    :data-dropdown-toggle="menuId"
    class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    :class="computedClass"
    type="button"
  >
    {{ label }}
    <svg
      v-if="!hideCaret"
      class="ms-3 h-2.5 w-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div
    :id="menuId"
    class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton">
      <li v-for="item in items" :key="item.value" @click="handleItemClick(item)">
        <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface, InstanceOptions } from "flowbite";
import { computed, onMounted } from "vue";

const props = defineProps<{
  dataTestId?: string;
  id?: string;
  label?: string;
  items: { name: string; value: string }[];
  fullWidth?: boolean;
  hideCaret?: boolean;
}>();

let dropdown: DropdownInterface;

const emit = defineEmits(["item:selected"]);

const dataTestId = computed<string>(() => `${props.id}`);
const menuId = computed<string>(() => `${props.id}-menu`);
const buttonId = computed<string>(() => `${props.id}-button`);

const computedClass = computed(() => {
  const classes = [];

  props.fullWidth && classes.push("w-full");

  return classes.join(" ").trim();
});

onMounted(() => {
  const $targetEl: HTMLElement | null = document.getElementById(menuId.value);

  const $triggerEl: HTMLElement | null = document.getElementById(buttonId.value);

  const options: DropdownOptions = {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
  };

  const instanceOptions: InstanceOptions = {
    id: menuId.value,
    override: true,
  };

  dropdown = new Dropdown($targetEl, $triggerEl, options, instanceOptions);
});

function hideDropdown() {
  dropdown.hide();
}

function handleItemClick(item: any) {
  emit("item:selected", item);
  hideDropdown();
}
</script>
