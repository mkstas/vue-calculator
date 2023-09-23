<script setup lang="ts">
defineProps<{
  value: string | number;
}>();
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>
