import React from "react";
import Login from "./Page/Login";
import Singup from "./Page/Singup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import { AuthProvider } from "./context/AuthContext";
import { AuthGuard } from "./Component/AuthGuard";
import { PublicRoute } from "./Component/PublicRoute";
import NotFound from "./Page/NotFound";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./Store/Store";

export default function App() {
  return (
    <Provider store={store}>
=======
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="721269353690-rcbdq1pfon56qdcfmth07ojjq4kq3ap4.apps.googleusercontent.com">
>>>>>>> 1db82aa16d5b63560d560e6dc9f2110c121d94f6
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
<<<<<<< HEAD
    </Provider>

=======
    </GoogleOAuthProvider>
>>>>>>> 1db82aa16d5b63560d560e6dc9f2110c121d94f6
  );
}
