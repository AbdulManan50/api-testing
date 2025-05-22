import React from "react";
import Login from "./Page/Login";
import Singup from "./Page/Singup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import { AuthProvider } from "./context/AuthContext";
import { AuthGuard } from "./Component/AuthGuard";
import { PublicRoute } from "./Component/PublicRoute";
import NotFound from "./Page/NotFound";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Singup />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <AuthGuard>
                  <Home />
                </AuthGuard>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>

  );
}
