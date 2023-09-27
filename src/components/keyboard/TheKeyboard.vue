<script setup lang="ts">
import { EnumButtonType } from "../../types/button.types";

import BaseButton from "../@ui/BaseButton.vue";

const emit = defineEmits<{
  update: [value: string];
  reset: [void];
  delete: [void];
  calculate: [void];
}>();
</script>

<template>
  <div class="pt-6 grid gap-4">
    <div class="grid grid-cols-4 gap-4">
      <BaseButton :type="EnumButtonType.danger" @click="emit('reset')">
        <span>AC</span>
      </BaseButton>
      <BaseButton :type="EnumButtonType.alert" @click="emit('delete')">
        <span>DEL</span>
      </BaseButton>
      <BaseButton :type="EnumButtonType.default" @click="emit('update', '%')">
        <span>%</span>
      </BaseButton>
      <BaseButton :type="EnumButtonType.default" @click="emit('update', ' / ')">
        <span>/</span>
      </BaseButton>

      <BaseButton @click="emit('update', '7')">
        <span>7</span>
      </BaseButton>
      <BaseButton @click="emit('update', '8')">
        <span>8</span>
      </BaseButton>
      <BaseButton @click="emit('update', '9')">
        <span>9</span>
      </BaseButton>
      <BaseButton :type="EnumButtonType.default" @click="emit('update', ' * ')">
        <span>*</span>
      </BaseButton>

      <BaseButton @click="emit('update', '4')">
        <span>4</span>
      </BaseButton>
      <BaseButton @click="emit('update', '5')">
        <span>5</span>
      </BaseButton>
      <BaseButton @click="emit('update', '6')">
        <span>6</span>
      </BaseButton>
      <BaseButton :type="EnumButtonType.default" @click="emit('update', ' - ')">
        <span>-</span>
      </BaseButton>

      <BaseButton @click="emit('update', '1')">
        <span>1</span>
      </BaseButton>
      <BaseButton @click="emit('update', '2')">
        <span>2</span>
      </BaseButton>
      <BaseButton @click="emit('update', '3')">
        <span>3</span>
      </BaseButton>
      <BaseButton :type="EnumButtonType.default" @click="emit('update', ' + ')">
        <span>+</span>
      </BaseButton>

      <BaseButton @click="emit('update', '00')">
        <span>00</span>
      </BaseButton>
      <BaseButton @click="emit('update', '0')">
        <span>0</span>
      </BaseButton>
      <BaseButton @click="emit('update', '.')">
        <span>.</span>
      </BaseButton>
      <BaseButton :type="EnumButtonType.success" @click="emit('calculate')">
        <span>=</span>
      </BaseButton>
    </div>
  </div>
</template>
