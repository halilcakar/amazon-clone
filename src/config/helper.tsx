import { ProductProps } from '../types';

export const currencyFormat = (num: number) =>
  '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const getBasketTotal = (basket: ProductProps[]) =>
  basket?.reduce((acc, item) => acc + item.price, 0);
