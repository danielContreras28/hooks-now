import {
  FormateNumber,
  NumberEdit,
} from '../interface/FormateNumber.interface';
import { global } from '../config';

export const useFormateNumber = (
  num: number,
  currency: string | null
): string | number => {
  const number = numberFormat({ number: num });
  const simbol = currency || global.currencyDefault;

  return `${simbol} ${number}`;
};

export const useFormateNumberSapn = (
  num: number,
  currency: string | null
): FormateNumber => {
  const simbol = currency || global.currencyDefault;

  return {
    num: numberFormat({ number: num }),
    simbol,
  };
};

export const useFormateOnlyNumber = (num: number): FormateNumber => {
  return {
    num: numberFormat({ number: num }),
  };
};

export const useFormateNumberDetail = (detail: NumberEdit): FormateNumber => {
  return {
    num: numberFormat(detail),
  };
};

const numberFormat = (edit: NumberEdit): string => {
  let { number, decimals, decPoint, thousandsSep } = edit;
  number = parseFloat(`${number}`.replace(/[^0-9+\-Ee.]/g, ''));
  const n: number = +number;
  const prec: number = Math.abs(
    number % 1 === 0 ? 0 : decimals || global.decimals
  );
  const sep: string = thousandsSep || global.thousandsSep;
  const dec: string = decPoint || global.decPoint;
  let s: string | string[] = '';

  const toFixedFix = (n: number, prec: number): string | number => {
    return n.toFixed(prec);
  };
  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec).toString() : `${Math.round(n)}`).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  return s.join(dec);
};
