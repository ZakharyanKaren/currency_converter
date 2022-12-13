import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExchangeRates from "./pages/exchangeRates/ExchangeRates";
import CurrencyConverter from "./pages/currencyConverter/CurrencyConverter";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "exchange_rates",
        element: <ExchangeRates />,
      },
      {
        path: "currency_converter",
        element: <CurrencyConverter />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
