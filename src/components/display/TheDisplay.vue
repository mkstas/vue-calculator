<script setup lang="ts">
defineProps<{
  expression: string;
}>();
</script>

<template>
  <div class="flex items-end justify-end h-32 pb-6 border-b border-neutral-700">
    <span class="text-4xl">{{ expression }}</span>
  </div>
</template>
