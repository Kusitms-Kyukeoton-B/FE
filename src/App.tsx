import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/\bExamplePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage />} />
    </Routes>
  );
}

export default App;
