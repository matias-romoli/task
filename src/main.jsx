import { TaskProvider, FunctionProvider } from "./hooks/context.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FunctionProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </FunctionProvider>
  </React.StrictMode>
);
