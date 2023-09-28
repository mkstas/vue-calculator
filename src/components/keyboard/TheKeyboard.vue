<script setup lang="ts">
import BaseButton from "../@ui/BaseButton.vue";

import { BUTTONS } from "../../shared/constants";

const emit = defineEmits<{
  update: [value: string];
  reset: [void];
  delete: [void];
  calculate: [void];
  percente: [void];
}>();
</script>

<template>
  <div class="grid grid-cols-4 gap-4 pt-6">
    <BaseButton
      v-for="button in BUTTONS"
      :key="button.value"
      :type="button.type"
    >
      {{ button.value }}
    </BaseButton>
  </div>
</template>
