<template>
  <div class="p-3 h-auto">
    <div class="flex justify-center">
      <button-component
        text="Toggle Dark/Light Mode"
        color="dark"
        :full-width="true"
        @click="toggleUiMode"
      />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="grid grid-cols-2">
      <card-component title="title" subtitle="subtitle" :hover="true"
        >i am inside your walls</card-component
      >
      <card-component title="title" subtitle="subtitle" :hover="false"
        >i am inside your walls</card-component
      >
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex-none flex-row space-y-3 grow-0 max-w-7xl">
      <input-component
        type="text"
        labelValue="field test"
        placeholder="field test"
        :requiredLabel="true"
      />
      <input-component
        type="password"
        labelValue="password field test"
        placeholder="password field test"
        :requiredLabel="false"
      />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <button-group-component :items="buttonItems" />
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <modal-component id="pp" title="abcdefghijklmnñopqrstuvwxyz" label="test"
      >test test</modal-component
    >
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <jumbo-component
      title="Lorem"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tempus ipsum, nec porta arcu. Phasellus eu commodo purus. Curabitur aliquet metus hendrerit lorem auctor pulvinar. Sed bibendum pulvinar lacinia. Ut iaculis pellentesque varius. Aenean lobortis nisi lobortis, hendrerit nisi nec, consequat dolor. Vivamus ut porttitor dolor. Vivamus mollis turpis urna, sed sollicitudin mi ultricies nec."
    />
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex-none flex-row space-x-3 grow-0">
      <dropdown-component id="dd1" label="peepeepoopoo" :hideCaret="true" :items="dropdownItems" />
      <dropdown-component id="dd2" label="peepeepoopoo" :items="dropdownItems" />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex-none flex-row space-x-3 grow-0">
      <popover-component id="po1" title="0987654321" button-label="test" content="hello" />
      <popover-component id="po2" title="1234567890" button-label="prueba" content="hola" />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex-none flex-row space-y-3 grow-0">
      <checkbox-component id="cb1" text="text" />
      <checkbox-component id="cb2" text="text" subtitle="subtitle" />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="grid grid-rows-6 gap-3 max-w-xl">
      <!-- <alert-component text="Change a few things up and try submitting again." icon="info-circle" /> -->
      <alert-component text="Change a few things up and try submitting again." />
      <alert-component text="Change a few things up and try submitting again." color="info" />
      <alert-component text="Change a few things up and try submitting again." color="danger" />
      <alert-component text="Change a few things up and try submitting again." color="success" />
      <alert-component text="Change a few things up and try submitting again." color="warning" />
      <alert-component text="Change a few things up and try submitting again." color="dark" />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex-none flex-row space-x-3 grow-0">
      <button-component text="transparent" color="transparent" size="xs" />
      <button-component text="primary" color="primary" size="base" />
      <button-component text="secondary" color="secondary" size="lg" />
      <button-component text="success" color="success" size="xl" />
      <button-component text="danger" color="danger" size="lg" />
      <button-component text="warning" color="warning" size="base" />
      <button-component text="info" color="info" size="xs" />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <!-- <div class="flex-none flex-row space-x-3 grow-0">
      <button-component icon="apple" text="transparent" color="transparent" size="xs" />
      <button-component icon="apple" text="primary" color="primary" size="base" />
      <button-component icon="apple" text="secondary" color="secondary" size="lg" />
      <button-component icon="apple" text="success" color="success" size="xl" />
      <button-component icon="apple" text="danger" color="danger" size="lg" />
      <button-component icon="apple" text="warning" color="warning" size="base" />
      <button-component icon="apple" text="info" color="info" size="xs" />
    </div> -->
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex-none flex-row space-y-3 grow-0">
      <button-component text="transparent" color="transparent" size="xs" :full-width="true" />
      <button-component text="primary" color="primary" size="base" :full-width="true" />
      <button-component text="secondary" color="secondary" size="lg" :full-width="true" />
      <button-component text="success" color="success" size="xl" :full-width="true" />
      <button-component text="danger" color="danger" size="lg" :full-width="true" />
      <button-component text="warning" color="warning" size="base" :full-width="true" />
      <button-component text="info" color="info" size="xs" :full-width="true" />
    </div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
    <!-- <div class="flex-none flex-row space-y-3 grow-0">
      <button-component
        icon="apple"
        text="transparent"
        color="transparent"
        size="xs"
        :full-width="true"
      />
      <button-component
        icon="apple"
        text="primary"
        color="primary"
        size="base"
        :full-width="true"
      />
      <button-component
        icon="apple"
        text="secondary"
        color="secondary"
        size="lg"
        :full-width="true"
      />
      <button-component icon="apple" text="success" color="success" size="xl" :full-width="true" />
      <button-component icon="apple" text="danger" color="danger" size="lg" :full-width="true" />
      <button-component
        icon="apple"
        text="warning"
        color="warning"
        size="base"
        :full-width="true"
      />
      <button-component icon="apple" text="info" color="info" size="xs" :full-width="true" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/card/CardComponent.vue";
import ButtonComponent from "@/components/button/ButtonComponent.vue";
import InputComponent from "@/components/input/InputComponent.vue";
import AlertComponent from "@/components/alert/AlertComponent.vue";
import ButtonGroupComponent from "@/components/button/ButtonGroupComponent.vue";
import DropdownComponent from "@/components/dropdown/DropdownComponent.vue";
import CheckboxComponent from "@/components/checkbox/CheckboxComponent.vue";
import ModalComponent from "@/components/modal/ModalComponent.vue";
import JumboComponent from "@/components/jumbotron/JumboComponent.vue";
import PopoverComponent from "@/components/popover/PopoverComponent.vue";

let isDarkMode: boolean = false;
const buttonItems = [
  { name: "hello", value: "hello" },
  { name: "world", value: "world" },
  { name: "this", value: "this" },
  { name: "is", value: "is" },
  { name: "an", value: "an" },
  { name: "item", value: "item" },
  { name: "group", value: "group" },
  { name: "test", value: "test" },
];
const dropdownItems = [
  { name: "hello", value: "hello" },
  { name: "world", value: "world" },
  { name: "this", value: "this" },
  { name: "is", value: "is" },
  { name: "a", value: "a" },
  { name: "dropdown", value: "dropdown" },
  { name: "test", value: "test" },
];

function toggleUiMode(): void {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark", isDarkMode);
  }
}
</script>
