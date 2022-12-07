import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  return (
    <main>
      <Header setSelectedTopic={setSelectedTopic} />
      <Routes>
        <Route path="/" element={<Articles selectedTopic={selectedTopic} />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </main>
  );
}
