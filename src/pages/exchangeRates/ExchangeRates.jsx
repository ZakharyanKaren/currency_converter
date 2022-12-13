import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestRateAsync,
  selectRates,
} from "../../features/counter/counterSlice";

function ExchangeRates() {
  const rates = useSelector(selectRates);
  const dispatch = useDispatch();
  console.log(rates);
  useEffect(() => {
    dispatch(requestRateAsync());
  }, []);

  return <div className="ExchangeRates">RATES</div>;
}

export default ExchangeRates;
