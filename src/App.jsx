import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Banner from "./components/Hero Section/Banner";

const App = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
