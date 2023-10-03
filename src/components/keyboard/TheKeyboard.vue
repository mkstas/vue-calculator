<script setup lang="ts">
import BaseButton from "../@ui/BaseButton.vue";
import { BUTTONS } from "../../shared/constants";
</script>

<template>
  <div class="grid grid-cols-4 gap-4 pt-6">
    <BaseButton
      v-for="button in BUTTONS"
      :key="button.value"
      :type="button.type"
      @click="button.action(button.value)"
    >
      {{ button.value }}
    </BaseButton>
  </div>
</template>
