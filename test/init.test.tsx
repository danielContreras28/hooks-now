import { ConfigHooks, hooksNumber } from '../src';

describe('int', () => {
  ConfigHooks({
    decimals: 2,
    decPoint: ',',
    thousandsSep: '.',
    currencyDefault: 'PSG',
  });
  it('FormateNumber', () => {
    expect(hooksNumber.useFormateNumber(1000, null)).toEqual('PSG 1.000');
  });
  it('FormateNumberSapn', () => {
    expect(hooksNumber.useFormateNumberSapn(1000, null)).toEqual({
      num: '1.000',
      simbol: 'PSG',
    });
  });
  it('FormateOnlyNumber', () => {
    expect(hooksNumber.useFormateOnlyNumber(1000)).toEqual({
      num: '1.000',
    });
  });

  it('FormateNumberDetail', () => {
    expect(
      hooksNumber.useFormateNumberDetail({
        number: 1000.3,
        decimals: 2,
        decPoint: '.',
        thousandsSep: ',',
      })
    ).toEqual({
      num: '1,000.30',
    });
  });

  it('FormateNumberDetail no decimals', () => {
    expect(
      hooksNumber.useFormateNumberDetail({
        number: 1000.3,
        decPoint: '.',
        thousandsSep: ',',
      })
    ).toEqual({
      num: '1,000.30',
    });
  });
});
