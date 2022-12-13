import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
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
