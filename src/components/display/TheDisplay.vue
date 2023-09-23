<script setup lang="ts">
defineProps<{
  expression: string;
}>();
</script>

<template>
  <div class="flex items-end justify-end h-40 p-4 border-b">
    <span class="text-2xl">{{ expression }}</span>
  </div>
</template>
