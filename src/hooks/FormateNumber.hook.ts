import {
  FormateNumber,
  NumberEdit,
} from '../interface/FormateNumber.interface';
import { global } from '../config';

export const useFormateNumber = (
  num: number,
  currency: string
): string | number => {
  const number = numberFormat({ number: num });
  const simbol = currency || global.currencyDefault;

  return typeof num === 'number' ? `${simbol} ${number}` : num;
};

export const useFormateNumberSapn = (
  num: number,
  currency: string
): FormateNumber => {
  const simbol = currency || global.currencyDefault;

  return typeof num === 'number'
    ? {
        num: numberFormat({ number: num }),
        simbol,
      }
    : { num };
};

export const useFormateOnlyNumber = (num: number): FormateNumber => {
  return typeof num === 'number'
    ? {
        num: numberFormat({ number: num }),
      }
    : { num };
};

const numberFormat = (edit: NumberEdit): string => {
  let { number, decimals, decPoint, thousandsSep } = edit;
  number = parseFloat(`${number}`.replace(/[^0-9+\-Ee.]/g, ''));
  const n: number = typeof number !== 'number' ? 0 : +number;
  const prec: number =
    typeof number !== 'number'
      ? number % 1 === 0
        ? 0
        : 2
      : Math.abs(number % 1 === 0 ? 0 : decimals || global.decimals);
  const sep: string = thousandsSep || global.thousandsSep;
  const dec: string = decPoint || global.decPoint;
  let s: string | string[] = '';

  const toFixedFix = (n: number, prec: number): string | number => {
    if (`${n}`.indexOf('e') === -1) {
      return +`${Math.round(parseFloat(`${n}e+${prec}`))}e-${prec}`;
    }
    const arr = `${n}`.split('e');
    let sig = '';
    if (+arr[1] + prec > 0) {
      sig = '+';
    }
    return (+`${Math.round(
      parseFloat(`${+arr[0]}e${sig}${+arr[1] + prec}`)
    )}e-${prec}`).toFixed(prec);
  };
  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec).toString() : `${Math.round(n)}`).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};
