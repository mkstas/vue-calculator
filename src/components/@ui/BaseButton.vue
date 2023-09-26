<script setup lang="ts">
import { computed } from "vue";
import { EnumButtonType } from "../../types/button.types";

const props = defineProps<{
  type?: EnumButtonType;
}>();

const classes = computed(() => [
  "absolute top-0 left-0 bottom-0 right-0 text-xl",
  props.type,
]);
</script>

<template>
  <div class="relative w-auto pt-[100%]">
    <button :class="classes">
      <slot></slot>
    </button>
  </div>
</template>
