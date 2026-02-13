import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatlogPage from "./pages/CatlogPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatlogPage />} />
      <Route path="/program" element={<FormPage />} /> 
    </Routes>
  );
}

export default App;
