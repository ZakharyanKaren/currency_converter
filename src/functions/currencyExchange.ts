import { CurrencyConverterTypes } from "../types/types";

export function currencyExchange({
  value,
  currency1Value,
  currency2Value,
}: CurrencyConverterTypes) {
  return Math.floor(((value * currency1Value) / currency2Value) * 100) / 100;
}
