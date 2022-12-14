export type CurrencyConverterTypes = {
  value: number;
  currency1Value: number;
  currency2Value: number;
};

export interface RatesType {
  [key: string]: number;
}

export type InputType = number | string;
