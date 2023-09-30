<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import TheDisplay from "./display/TheDisplay.vue";
import TheKeyboard from "./keyboard/TheKeyboard.vue";

const expression: Ref<string> = ref("0");

const firstSymbolIsZero = (): boolean => {
  return expression.value.slice(0) === "0";
};

const lengthIsOne = (): boolean => {
  return expression.value.length === 1;
};

const clearAllExpression = (): void => {
  expression.value = "0";
};

const calculateExpression = (): void => {
  expression.value = eval(expression.value).toString();
};

const clearExpression = (): void | string => {
  if ((lengthIsOne() && !firstSymbolIsZero()) || firstSymbolIsZero()) {
    return (expression.value = "0");
  }

  expression.value = expression.value.slice(0, -1);
};

const setFirstSymbol = (symbol: string): void => {
  expression.value = symbol;
};

const addInExpression = (symbol: string) => {
  expression.value += symbol;
};

const onClickButton = (symbol: string): string | void => {
  if (symbol === "AC") return clearAllExpression();

  if (symbol === "C") return clearExpression();

  if (symbol === "00" && firstSymbolIsZero()) return;

  if (symbol === "=") return calculateExpression();

  if (firstSymbolIsZero()) return setFirstSymbol(symbol);

  return addInExpression(symbol);
};
</script>

<template>
  <div class="max-w-sm mx-auto p-6 h-screen">
    <TheDisplay :expression="expression" />
    <TheKeyboard @on-click-button="onClickButton" />
  </div>
</template>
