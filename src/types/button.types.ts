export enum EnumButtonType {
  default = "hover:bg-neutral-700",
  filled = "bg-neutral-700 hover:bg-neutral-700/80",
  success = "bg-green-500 hover:bg-green-500/80",
  alert = "bg-yellow-500 hover:bg-yellow-500/80",
  danger = "bg-red-500 hover:bg-red-500/80",
}

export type TypeButton = {
  value: string;
  type?: EnumButtonType;
};
