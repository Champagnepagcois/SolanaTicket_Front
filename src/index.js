import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import store from "./redux/store";
import {HashRouter} from "react-router-dom"
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import IndexPage from "./pages/IndexPage";
import HomePage from "./pages/HomePage";
import Root from "./routes/root";
import SearchPage from "./pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById("root");

//root.render(
render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<IndexPage/>}/>
            <Route path="index" element={<IndexPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<Navigate to="/home" replace/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
/*
<React.StrictMode>
  <App />
</React.StrictMode>
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
