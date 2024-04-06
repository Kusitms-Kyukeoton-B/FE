import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ExamplePage from "./pages/ExamplePage";
import LoginPage from "./pages/LoginPage";
import GridPage from "./pages/home/GridPage";
import ImageDetailPage from "./pages/home/ImageDetailPage";
import MyPage from "./pages/mypage/MyPage";
import MyPageEditPage from "./pages/mypage/MyPageEdit";
import FileUploadPage from "./pages/home/FileUploadPage";
import PointPage from "./pages/mypage/PointPages";
import CommuintyPage from "./pages/community/CommunityPage";
import NoPharmingPage from "./pages/mypage/NoPharmingPage";
import MainCharacterPage from "./pages/charactor/MainCharacterPage";

function App() {
  return (
      <Route path="/" element={<ExamplePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<MyPage />} />
      <Route path="/profile/edit" element={<MyPageEditPage />} />
      <Route path="/ex" element={<GridPage />} />
      <Route path="/point" element={<PointPage />} />
      <Route path="/detail/:index" element={<ImageDetailPage />} />
      <Route path="/file" element={<FileUploadPage />} />
      <Route path="/nopharming" element={<NoPharmingPage />} />
      <Route path="/dophami" element={<MainCharacterPage />} />
    </Routes>
  );
}

export default App;
