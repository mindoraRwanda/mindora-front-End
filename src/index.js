import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Spinner from "./pages/admin-dashboard/views/Spinner/Spinner.js";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
