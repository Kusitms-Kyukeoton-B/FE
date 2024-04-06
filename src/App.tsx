import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExamplePage from "./pages/ExamplePage";
import LoginPage from "./pages/LoginPage";
import GridPage from "./pages/home/GridPage";
import ImageDetailPage from "./pages/home/ImageDetailPage";
import MyPage from "./pages/mypage/MyPage";
import MyPageEditPage from "./pages/mypage/MyPageEdit";
import FileUploadPage from "./pages/home/FileUploadPage";
import PointPage from "./pages/mypage/PointPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExamplePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<MyPage />} />
      <Route path="/profile/edit" element={<MyPageEditPage />} />
      <Route path="/ex" element={<GridPage />} />
      <Route path="/point" element={<PointPage />} />
      <Route path="/detail/:index" element={<ImageDetailPage />} />
      <Route path="/file" element={<FileUploadPage />} />
    </Routes>
  );
}

export default App;
