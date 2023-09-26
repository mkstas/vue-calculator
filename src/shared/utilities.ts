import { TypeButtonLabel } from "../types/buttonLabel.types";

export const generateKeyboardNumbers = () => {
  const numbers = [];

  for (let i = 1; i <= 9; i++) {
    numbers.push({
      label: i.toString(),
      value: i.toString(),
    } as TypeButtonLabel);
  }

  return numbers;
};
