<template>
  <div class="mx-auto p-3 h-auto">
    <button-component text="Toggle UI" color="dark" @click="toggleUiMode" />
    <div class="grid grid-cols-2 mb-3">
      <card-component title="a" :hover="true">i am inside your walls</card-component>
      <card-component title="a" :hover="false">i am inside your walls</card-component>
    </div>
    <div class="grid grid-cols-7 gap-3">
      <button-component text="no color" />
      <button-component text="primary" color="primary" />
      <button-component text="secondary" color="secondary" />
      <button-component text="success" color="success" />
      <button-component text="danger" color="danger" />
      <button-component text="warning" color="warning" />
      <button-component text="info" color="info" />
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
