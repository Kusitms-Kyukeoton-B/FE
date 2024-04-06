import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/ExamplePage";
import LoginPage from "./pages/LoginPage";
import FileUploadPage from "./pages/FileUploadPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/file" element={<FileUploadPage />} />
      </Routes>
    </>
  );
}

export default App;
