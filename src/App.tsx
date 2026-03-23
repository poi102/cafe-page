import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import MenuPage from "./page/MenuPage";
import ConceptPage from "./page/ConceptPage";
import type { JSX } from "react";

export default function App(): JSX.Element  {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/concept" element={<ConceptPage />} />
    </Routes>
  );
}