import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import { themes } from "./theme/themes";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider theme={themes}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
