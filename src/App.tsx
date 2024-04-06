import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/\bExamplePage";
import LoginPage from "./pages/LoginPage";
import GridPage from "./pages/GridPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ex" element={<GridPage />} />
    </Routes>
  );
}

export default App;
