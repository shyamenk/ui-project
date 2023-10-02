import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css";
import { ConfigProvider, Select } from "antd";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Select: {
            colorText: "#1D4ED8",
            colorPrimary: "black",
            // optionFontSize: 15,
            borderRadius: 5,
            colorBorder: "none",
            // fontSize: 16,
            fontWeightStrong: 25,
            optionLineHeight: 3,
            colorPrimaryBorder: "white",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
