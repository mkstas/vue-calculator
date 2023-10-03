<script setup lang="ts">
import { expression } from "../../shared/composables/expression";
</script>

<template>
  <div class="flex items-end justify-end h-32 pb-6 border-b border-neutral-700">
    <span class="text-5xl">{{ expression }}</span>
  </div>
</template>
