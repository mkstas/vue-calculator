<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import TheHeader from "./header/TheHeader.vue";
import TheDisplay from "./display/TheDisplay.vue";
import TheKeyboard from "./keyboard/TheKeyboard.vue";

const expression: Ref<string> = ref("");

const actions = ["AC", "DEL", "="];

const addSymbol = (symbol: string) => {
  if (!actions.includes(symbol.toString())) {
    return (expression.value += symbol.toString());
  }

  if (symbol.toString() === "=") {
    return (expression.value = eval(expression.value).toString());
  }

  if (symbol.toString() === "DEL") {
    return (expression.value = expression.value.slice(0, -1));
  }

  if (symbol.toString() === "AC") {
    return (expression.value = "");
  }
};
</script>

<template>
  <main>
    <TheHeader />
    <TheDisplay :expression="expression" />
    <TheKeyboard :add-symbol="addSymbol" />
  </main>
</template>
