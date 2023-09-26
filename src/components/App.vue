<script setup lang="ts">
import { ref } from "vue";

// import TheHeader from "./header/TheHeader.vue";
import TheDisplay from "./display/TheDisplay.vue";
import TheKeyboard from "./keyboard/TheKeyboard.vue";

const expression = ref("0");

const addToExpression = (symbol: string) => {
  if (expression.value.slice(0) === "0") {
    return (expression.value = symbol);
  }

  expression.value += symbol;
};

const deleteExpression = () => {
  expression.value = expression.value.slice(0, -1);
};

const resetExpression = () => {
  expression.value = (0).toString();
};

const calculateExpression = () => {
  expression.value = eval(expression.value).toString();
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
    />
  </div>
</template>
