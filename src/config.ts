import { Config, ConfigInit } from './interface/config.interface';

let global: ConfigInit;

global = {
  decimals: 2,
  decPoint: ',',
  thousandsSep: '.',
  currencyDefault: 'USD',
};

const ConfigHooks = (conf: Config) => {
  if (conf.decimals) global.decimals = conf.decimals || 2;
  if (conf.decPoint) global.decPoint = conf.decPoint || ',';
  if (conf.thousandsSep) global.thousandsSep = conf.thousandsSep || '.';
  if (conf.currencyDefault)
    global.currencyDefault = conf.currencyDefault || 'USD';
};

export { ConfigHooks, global };
