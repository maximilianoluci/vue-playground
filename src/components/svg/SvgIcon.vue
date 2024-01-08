<template>
  <component :is="icon" role="img" :class="computedClass" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";

const iconSizes: Record<string, { weight: number }> = {
  xs: { weight: 18 },
  sm: { weight: 25 },
  md: { weight: 32 },
  lg: { weight: 46 },
};

const props = defineProps({
  name: { type: String, required: true },
  size: {
    type: String,
    default: "sm",
    validator: (value: string) => {
      return ["xs", "sm", "mg", "lg"].includes(value);
    },
  },
  enableTransitions: {
    type: Boolean,
    default: false,
  },
});

const computedClass = computed(() => {
  const classes: any = [];

  if (props.enableTransitions) {
    classes.push("transition", "duration-100");
  }

  return classes.join(" ");
});

const width = computed(() => iconSizes[props.size].weight);
const height = computed(() => iconSizes[props.size].weight);

const icons = import.meta.glob("../../assets/svg/*.svg");

const icon = computed(() => {
  const icon = icons[`../../assets/svg/${props.name}.svg`] as any;
  return defineAsyncComponent(() => icon());
});
</script>
