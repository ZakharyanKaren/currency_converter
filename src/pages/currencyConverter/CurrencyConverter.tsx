import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRates } from "../../features/counter/counterSlice";
import { currencyExchange } from "../../functions/currencyExchange";
import { InputType, RatesType } from "../../types/types";
import "./currencyConverter.scss";

function CurrencyConverter() {
  const [input1Value, setInput1Value] = useState<InputType>(0);
  const [input2Value, setInput2Value] = useState<InputType>(0);
  const [select1Value, setSelect1Value] = useState<string>("USD");
  const [select2Value, setSelect2Value] = useState<string>("EUR");

  const rates: RatesType = useSelector(selectRates);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = Number(e.target.value);
    if (!targetValue) {
      setInput1Value("");
      setInput2Value("");
    } else {
      if (e.target.name === "input1") {
        setInput1Value(targetValue);

        setInput2Value(
          currencyExchange({
            value: targetValue,
            currency1Value: rates[select1Value],
            currency2Value: rates[select2Value],
          })
        );
      } else {
        setInput2Value(targetValue);

        setInput1Value(
          currencyExchange({
            value: targetValue,
            currency1Value: rates[select2Value],
            currency2Value: rates[select1Value],
          })
        );
      }
    }
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    e.target.name === "select1"
      ? setSelect1Value(e.target.value)
      : setSelect2Value(e.target.value);
  }

  const selectItems = Object.keys(rates).map((objectKey, i) => {
    return (
      <option key={i} value={objectKey}>
        {objectKey}
      </option>
    );
  });

  return (
    <div className="currencyConverterWrapper">
      <div className="currencyConverter">
        <div>
          <select
            name="select1"
            value={select1Value}
            onChange={(e) => handleSelectChange(e)}
          >
            {selectItems}
          </select>
          <input
            type="number"
            name="input1"
            value={input1Value}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <select
            name="select2"
            value={select2Value}
            onChange={handleSelectChange}
          >
            {selectItems}
          </select>
          <input
            type="number"
            name="input2"
            value={input2Value}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
