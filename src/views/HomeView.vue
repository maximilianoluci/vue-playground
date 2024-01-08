<template>
  <div class="p-3 h-auto">
    <button-component
      class="mb-3"
      text="Toggle Dark/Light Mode"
      color="dark"
      @click="toggleUiMode"
    />
    <div class="grid grid-cols-2 mb-3">
      <card-component title="title" subtitle="subtitle" :hover="true"
        >i am inside your walls</card-component
      >
      <card-component title="title" subtitle="subtitle" :hover="false"
        >i am inside your walls</card-component
      >
    </div>
    <div class="flex-none flex-row grow-0 mb-3">
      <button-component text="transparent" color="transparent" size="xs" />
      <button-component text="primary" color="primary" size="base" />
      <button-component text="secondary" color="secondary" size="lg" />
      <button-component text="success" color="success" size="xl" />
      <button-component text="danger" color="danger" size="lg" />
      <button-component text="warning" color="warning" size="base" />
      <button-component text="info" color="info" size="xs" />
    </div>
    <div class="flex-none flex-row grow-0 mb-3">
      <button-component icon="apple" text="transparent" color="transparent" size="xs" />
      <button-component icon="apple" text="primary" color="primary" size="base" :rounded="true" />
      <button-component icon="apple" text="secondary" color="secondary" size="lg" :rounded="true" />
      <button-component icon="apple" text="success" color="success" size="xl" :rounded="true" />
      <button-component icon="apple" text="danger" color="danger" size="lg" :rounded="true" />
      <button-component icon="apple" text="warning" color="warning" size="base" :rounded="true" />
      <button-component icon="apple" text="info" color="info" size="xs" :rounded="true" />
    </div>
    <div class="flex-none flex-row grow-0 mb-3">
      <button-component text="transparent" color="transparent" size="xs" :full-width="true" />
      <button-component text="primary" color="primary" size="base" :full-width="true" />
      <button-component text="secondary" color="secondary" size="lg" :full-width="true" />
      <button-component text="success" color="success" size="xl" :full-width="true" />
      <button-component text="danger" color="danger" size="lg" :full-width="true" />
      <button-component text="warning" color="warning" size="base" :full-width="true" />
      <button-component text="info" color="info" size="xs" :full-width="true" />
    </div>
    <div class="flex-none flex-row grow-0 mb-3">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "../components/card/CardComponent.vue";
import ButtonComponent from "../components/button/ButtonComponent.vue";

let isDarkMode: boolean = false;

function toggleUiMode(): void {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark", isDarkMode);
  }
}
</script>
