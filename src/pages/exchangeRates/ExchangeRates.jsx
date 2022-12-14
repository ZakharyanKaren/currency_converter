import { useSelector } from "react-redux";
import { selectRates } from "../../features/counter/counterSlice";
import "./exchangeRates.scss";

function ExchangeRates() {
  const rates = useSelector(selectRates);

  return (
    <div className="exchangeRatesWrapper">
      <div>AMD</div>
      <div className="rates">
        {Object.keys(rates).map((objectKey, i) => {
          return (
            <div className="ratesField" key={i}>
              <span>{objectKey} :</span>
              <span>{rates[objectKey]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExchangeRates;
