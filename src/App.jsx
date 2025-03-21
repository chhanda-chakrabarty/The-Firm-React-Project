import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Banner from "./components/Hero Section/Banner";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default App;
