<script setup lang="ts">
import { ref } from "vue";

import TheDisplay from "./display/TheDisplay.vue";
import TheKeyboard from "./keyboard/TheKeyboard.vue";

const expression = ref("0");

const addToExpression = (symbol: string) => {
  if (expression.value.slice(0, -1) === "0" && symbol === "00") {
    return;
  }

  if (expression.value.slice(0, -1) === "0" && symbol === ".") {
    return (expression.value = expression.value + symbol);
  }

  if (expression.value.slice(0, -1) === "0" && symbol === "/") {
    return;
  }

  if (expression.value.slice(0, -1) === "0" && symbol === "*") {
    return;
  }

  if (expression.value.slice(0, -1) === "0" && symbol === "+") {
    return;
  }

  if (expression.value.slice(0) === "0") {
    return (expression.value = symbol);
  }

  return (expression.value += symbol);
};

const deleteExpression = () => {
  if (expression.value.length === 1 && expression.value[0] !== "0") {
    return (expression.value = "0");
  }

  return (expression.value = expression.value.slice(0, -1));
};

const resetExpression = () => {
  return (expression.value = (0).toString());
};

const calculateExpression = () => {
  return (expression.value = eval(expression.value).toString());
};

const percenteExpression = () => {
  return (expression.value = (eval(expression.value) / 100).toString());
};
</script>

<template>
  <div class="max-w-sm mx-auto p-6 h-screen">
    <TheDisplay :expression="expression" />
    <TheKeyboard
      @update="addToExpression($event)"
      @reset="resetExpression"
      @delete="deleteExpression"
      @calculate="calculateExpression"
      @percente="percenteExpression"
    />
  </div>
</template>
