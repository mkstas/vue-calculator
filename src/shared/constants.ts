import { EnumButtonType, TypeButton } from "../types/button.types";

import { useExpression } from "./composables/expression";

const {
  clearExpression,
  clearAllExpression,
  calculateExpression,
  addInExpression,
  percenteExpression,
  addDoubleZero,
  addDot,
} = useExpression();

export const BUTTONS: TypeButton[] = [
  {
    value: "AC",
    type: EnumButtonType.danger,
    action: clearAllExpression,
  },
  {
    value: "C",
    type: EnumButtonType.alert,
    action: clearExpression,
  },
  {
    value: "%",
    type: EnumButtonType.filled,
    action: percenteExpression,
  },
  {
    value: "/",
    type: EnumButtonType.filled,
    action: addInExpression,
  },
  {
    value: "7",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "8",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "9",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "*",
    type: EnumButtonType.filled,
    action: addInExpression,
  },
  {
    value: "4",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "5",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "6",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "-",
    type: EnumButtonType.filled,
    action: addInExpression,
  },
  {
    value: "1",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "2",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "3",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: "+",
    type: EnumButtonType.filled,
    action: addInExpression,
  },
  {
    value: "00",
    type: EnumButtonType.default,
    action: addDoubleZero,
  },
  {
    value: "0",
    type: EnumButtonType.default,
    action: addInExpression,
  },
  {
    value: ".",
    type: EnumButtonType.default,
    action: addDot,
  },
  {
    value: "=",
    type: EnumButtonType.success,
    action: calculateExpression,
  },
];
