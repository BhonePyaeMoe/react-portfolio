import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./components/intro";
import Nav from "./components/nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/nav" element={<Nav />} />
    </Routes>
  );
}

export default App;
