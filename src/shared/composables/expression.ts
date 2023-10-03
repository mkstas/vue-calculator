import { ref } from "vue";
import type { Ref } from "vue";

import { lengthIsOne, firstSymbolIsZero } from "../validators";

export const expression: Ref<string> = ref("0");

export const useExpression = () => {
  const clearExpression = () => {
    if (
      (lengthIsOne(expression.value) && !firstSymbolIsZero(expression.value)) ||
      firstSymbolIsZero(expression.value)
    ) {
      return (expression.value = "0");
    }

    expression.value = expression.value.slice(0, -1);
  };

  const clearAllExpression = () => {
    expression.value = "0";
  };

  const percenteExpression = () => {};

  const calculateExpression = () => {
    expression.value = eval(expression.value).toString();
  };

  const setFirstSymbol = (symbol: string) => {
    expression.value = symbol;
  };

  const addInExpression = (symbol: string) => {
    firstSymbolIsZero(expression.value)
      ? setFirstSymbol(symbol)
      : (expression.value += symbol);
  };

  const addDoubleZero = (symbol: string) => {
    !firstSymbolIsZero(expression.value) && (expression.value += symbol);
  };

  const addDot = (symbol: string) => {
    expression.value += symbol;
  };

  return {
    expression,
    clearExpression,
    clearAllExpression,
    calculateExpression,
    percenteExpression,
    setFirstSymbol,
    addInExpression,
    addDoubleZero,
    addDot,
  };
};
