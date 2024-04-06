import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/\bExamplePage";
import LoginPage from "./pages/LoginPage";
import GridPage from "./pages/GridPage";
import ImageDetailPage from "./pages/ImageDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ex" element={<GridPage />} />
      <Route path="/detail/:index" element={<ImageDetailPage />} />
    </Routes>
  );
}

export default App;
