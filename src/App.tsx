import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { AppDispatch } from "./app/store";
import { requestRateAsync } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(requestRateAsync());
  }, []);

  return (
    <div className="App">
      <div className="navbarWrapper">
        <div>
          <Link to={`exchange_rates`}>
            <div className="ratesTextWrapper">Tablo</div>
          </Link>
        </div>
        <div>
          <Link to={`currency_converter`}>
            <div className="currencyTextWrapper">Calculate</div>
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
