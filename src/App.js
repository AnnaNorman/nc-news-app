import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </main>
  );
}
