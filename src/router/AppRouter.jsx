import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../ui/AppLayout";
import MainApp from "../views/MainApp";
import Myfavorites from "../views/Myfavorites";
import AppProvider from "../context/AppProvider";

export const AppRouter = () => {
  return (
    <AppLayout>
      <AppProvider>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/favorites" element={<Myfavorites />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </AppProvider>
    </AppLayout>
  );
};
