<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import TheDisplay from "./display/TheDisplay.vue";
import TheKeyboard from "./keyboard/TheKeyboard.vue";

const expression: Ref<string> = ref("0");

const onClickButton = (symbol: string): string => {
  if (symbol === "AC") {
    return (expression.value = "0");
  }

  if (symbol === "C") {
    if (expression.value.length === 1 && expression.value.slice(0) !== "0") {
      return (expression.value = "0");
    }

    return (expression.value = expression.value.slice(0, -1));
  }

  if (symbol === "=") {
    return (expression.value = eval(expression.value).toString());
  }

  if (expression.value.slice(0) === "0") {
    return (expression.value = symbol);
  }

  return (expression.value += symbol);
};
</script>

<template>
  <div class="max-w-sm mx-auto p-6 h-screen">
    <TheDisplay :expression="expression" />
    <TheKeyboard @on-click-button="onClickButton" />
  </div>
</template>
