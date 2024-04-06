import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { AnimatePresence } from "framer-motion";
import QuestionDetailPage from "./pages/community/QuesDetailPage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<MyPage />} />
        <Route path="/profile/edit" element={<MyPageEditPage />} />
        <Route path="/" element={<GridPage />} />
        <Route path="/point" element={<PointPage />} />
        <Route path="/detail/:index" element={<ImageDetailPage />} />
        <Route path="/file" element={<FileUploadPage />} />
        <Route path="/community" element={<CommuintyPage />} />
        <Route path="/nopharming" element={<NoPharmingPage />} />
        <Route path="/dophami" element={<MainCharacterPage />} />
        <Route path="/question/detail" element={<QuestionDetailPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
