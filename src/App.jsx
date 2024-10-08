import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import React, { useState, useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      

      <Route element={<ProtectedRoutes />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/signup" element={<SignupPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};


export default App;
