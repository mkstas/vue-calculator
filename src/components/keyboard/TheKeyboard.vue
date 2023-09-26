<script setup lang="ts">
import { NUMBERS } from "../../shared/constants";

import BaseButton from "../@ui/BaseButton.vue";

const emit = defineEmits<{
  update: [value: string];
  reset: [void];
  delete: [void];
  calculate: [void];
}>();
</script>

<template>
  <div class="grid grid-cols-4">
    <BaseButton @click="emit('reset')">
      <span>AC</span>
    </BaseButton>
    <BaseButton @click="emit('delete')">
      <span>DEL</span>
    </BaseButton>
    <BaseButton @click="emit('update', '%')">
      <span>%</span>
    </BaseButton>
    <BaseButton @click="emit('update', '/')">
      <span>/</span>
    </BaseButton>
  </div>

  <div class="grid grid-cols-[3fr_1fr]">
    <div class="grid grid-cols-3">
      <BaseButton
        v-for="number in NUMBERS"
        :key="number.value"
        @click="emit('update', number.value)"
      >
        <span>{{ number.label }}</span>
      </BaseButton>
    </div>

    <div class="grid">
      <BaseButton @click="emit('update', '*')">
        <span>*</span>
      </BaseButton>
      <BaseButton @click="emit('update', '-')">
        <span>-</span>
      </BaseButton>
      <BaseButton @click="emit('update', '+')">
        <span>+</span>
      </BaseButton>
    </div>
  </div>

  <div class="grid grid-cols-4">
    <BaseButton @click="emit('update', '00')">
      <span>00</span>
    </BaseButton>
    <BaseButton @click="emit('update', '0')">
      <span>0</span>
    </BaseButton>
    <BaseButton @click="emit('update', '.')">
      <span>.</span>
    </BaseButton>
    <BaseButton @click="emit('calculate')">
      <span>=</span>
    </BaseButton>
  </div>
</template>
