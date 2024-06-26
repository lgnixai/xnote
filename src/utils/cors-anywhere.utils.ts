import { Exchange } from '../app.types';

export const getCORSAnywhere = (exchange: Exchange, testnet: boolean) => {
  if (exchange === Exchange.Binance && testnet) {
    return 'https://cors.BigNews/';
  }
  return undefined;
};
