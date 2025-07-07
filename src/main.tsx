import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import CardlessTransaction from "./pages/CardlessTransaction";
import CardlessConfirm from "./pages/CardlessConfirm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="cardless"
            element={
              <ProtectedRoute>
                <CardlessTransaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cardless-confirm"
            element={
              <ProtectedRoute>
                <CardlessConfirm />
              </ProtectedRoute>
            }
          />

          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
