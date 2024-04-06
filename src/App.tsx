import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/\bExamplePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
