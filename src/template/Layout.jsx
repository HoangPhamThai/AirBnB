import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
