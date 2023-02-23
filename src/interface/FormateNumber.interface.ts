export interface FormateNumber {
  num: number | string | null;
  simbol?: string | null;
}

export interface NumberEdit {
  number: number;
  decimals?: number;
  decPoint?: string;
  thousandsSep?: string;
}
