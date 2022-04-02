import React, { StrictMode } from "react"
import "./index.css"
import App from "./App"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./Store"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      
      <App />
    </Provider>
  </StrictMode>
)
