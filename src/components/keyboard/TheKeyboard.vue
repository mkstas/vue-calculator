<script setup lang="ts">
import BaseButton from "../@ui/BaseButton.vue";

defineProps(["addSymbol"]);

const row1 = ["AC", "DEL", "%", "/"];
const col1 = ["*", "-", "+"];
const row2 = ["00", 0, ".", "="];
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];
</script>

<template>
  <div class="grid grid-cols-4">
    <BaseButton v-for="value in row1" :key="value" @click="addSymbol(value)">
      <span>{{ value }}</span>
    </BaseButton>
  </div>

  <div class="grid grid-cols-[3fr_1fr]">
    <div class="grid grid-cols-3">
      <BaseButton
        v-for="value in numbers"
        :key="value"
        @click="addSymbol(value)"
      >
        <span>{{ value }}</span>
      </BaseButton>
    </div>
    <div class="grid">
      <BaseButton v-for="value in col1" :key="value" @click="addSymbol(value)">
        <span>{{ value }}</span>
      </BaseButton>
    </div>
  </div>

  <div class="grid grid-cols-4">
    <BaseButton v-for="value in row2" :key="value" @click="addSymbol(value)">
      <span>{{ value }}</span>
    </BaseButton>
  </div>
</template>
