<template>
  <div>
    <button
      type="button"
      class="text-white font-medium rounded-lg text-sm px-5 py-2.5 m-3 focus:outline-none"
      :class="computedClass"
      @click="onClick"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
}>()

const emit = defineEmits(['click'])

const computedClass = computed(() => {
  const classes = []

  switch (props.color) {
    case undefined:
    case null:
    case 'primary':
      classes.push(
        'bg-blue-500',
        'hover:bg-blue-800',
        'focus:ring-1',
        'focus:ring-blue-300',
        'dark:bg-blue-600',
        'dark:hover:bg-blue-700',
        'dark:focus:ring-blue-800'
      )
      break
    case 'secondary':
      classes.push(
        'bg-gray-500',
        'hover:bg-gray-800',
        'focus:ring-1',
        'focus:ring-gray-300',
        'dark:bg-gray-600',
        'dark:hover:bg-gray-700',
        'dark:focus:ring-gray-800'
      )
      break
    case 'success':
      classes.push(
        'bg-green-500',
        'hover:bg-green-800',
        'focus:ring-1',
        'focus:ring-green-300',
        'dark:bg-green-600',
        'dark:hover:bg-green-700',
        'dark:focus:ring-green-800'
      )
      break
    case 'danger':
      classes.push(
        'bg-red-500',
        'hover:bg-red-800',
        'focus:ring-1',
        'focus:ring-red-300',
        'dark:bg-red-600',
        'dark:hover:bg-red-700',
        'dark:focus:ring-red-800'
      )
      break
    case 'warning':
      classes.push(
        'bg-yellow-500',
        'hover:bg-yellow-800',
        'focus:ring-1',
        'focus:ring-yellow-300',
        'dark:bg-yellow-600',
        'dark:hover:bg-yellow-700',
        'dark:focus:ring-yellow-800'
      )
      break
    case 'info':
      classes.push(
        'bg-cyan-500',
        'hover:bg-cyan-800',
        'focus:ring-1',
        'focus:ring-cyan-300',
        'dark:bg-cyan-600',
        'dark:hover:bg-cyan-700',
        'dark:focus:ring-cyan-800'
      )
      break
  }

  return classes.join(' ').trim()
})

function onClick() {
  emit('click')
}
</script>
