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
    <div class="flex-none flex-row grow-0">
      <button-component class="mr-3" text="no color" size="xs" />
      <button-component class="mr-3" text="primary" color="primary" size="base" :rounded="true" />
      <button-component class="mr-3" text="secondary" color="secondary" size="lg" />
      <button-component class="mr-3" text="success" color="success" size="xl" :rounded="true" />
      <button-component class="mr-3" text="danger" color="danger" size="lg" />
      <button-component class="mr-3" text="warning" color="warning" size="base" :rounded="true" />
      <button-component text="info" color="info" size="xs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '../components/card/CardComponent.vue';
import ButtonComponent from '../components/button/ButtonComponent.vue';

let isDarkMode: boolean = false;

function toggleUiMode(): void {
  const htmlElement = document.querySelector('html');
  if (htmlElement) {
    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle('dark', isDarkMode);
  }
}
</script>
