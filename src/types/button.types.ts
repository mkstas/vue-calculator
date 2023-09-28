export enum EnumButtonType {
  filled = "bg-neutral-700 rounded-full",
  success = "bg-green-500 rounded-full",
  alert = "bg-yellow-500 rounded-full",
  danger = "bg-red-500 rounded-full",
}

export type TypeButton = {
  value: string;
  type?: EnumButtonType;
};
