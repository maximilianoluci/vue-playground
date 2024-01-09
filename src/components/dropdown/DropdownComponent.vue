<template>
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    {{ title ? title : "Dropdown button" }}
    <svg
      v-if="!hideCaret"
      class="w-2.5 h-2.5 ms-3"
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
    id="dropdown"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
    >
      <li v-for="item in items" :key="item">
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >{{ item }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from "flowbite";
import type { DropdownOptions, DropdownInterface, InstanceOptions } from "flowbite";

defineProps<{
  title?: string;
  items: string[];
  hideCaret?: boolean;
}>();

document.addEventListener("DOMContentLoaded", function () {
  // set the dropdown menu element
  const $targetEl: HTMLElement | null = document.getElementById("dropdownMenu");

  // set the element that triggers the dropdown menu on click
  const $triggerEl: HTMLElement | null = document.getElementById("dropdownButton");

  if ($targetEl && $triggerEl) {
    // options with default values
    const options: DropdownOptions = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      onHide: () => {
        console.log("dropdown has been hidden");
      },
      onShow: () => {
        console.log("dropdown has been shown");
      },
      onToggle: () => {
        console.log("dropdown has been toggled");
      },
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
      id: "dropdownMenu",
      override: true,
    };

    /*
     * targetEl: required
     * triggerEl: required
     * options: optional
     * instanceOptions: optional
     */
    const dropdown: DropdownInterface = new Dropdown(
      $targetEl,
      $triggerEl,
      options,
      instanceOptions,
    );

    // show the dropdown
    dropdown.show();
  } else {
    console.error("Dropdown elements not found in the DOM.");
  }
});
</script>
