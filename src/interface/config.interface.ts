export interface ConfigInit {
  decimals: number;
  decPoint: string;
  thousandsSep: string;
  currencyDefault: string;
}

export interface Config {
  decimals?: number | null;
  decPoint?: string;
  thousandsSep?: string;
  currencyDefault?: string;
}
