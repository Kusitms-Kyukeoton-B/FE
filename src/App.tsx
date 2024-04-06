import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import GridPage from "./pages/home/GridPage";
import ImageDetailPage from "./pages/home/ImageDetailPage";
import MyPage from "./pages/mypage/MyPage";
import MyPageEditPage from "./pages/mypage/MyPageEdit";
import FileUploadPage from "./pages/home/FileUploadPage";
import PointPage from "./pages/mypage/PointPages";
import NoPharmingPage from "./pages/mypage/NoPharmingPage";
import MainCharacterPage from "./pages/charactor/MainCharacterPage";
import LetterPage from "./pages/mypage/LetterPage";
import MeditationPage from "./pages/mypage/Meditation";
import QuestionDetailPage from "./pages/community/QuesDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<MyPage />} />
      <Route path="/profile/edit" element={<MyPageEditPage />} />
      <Route path="/" element={<GridPage />} />
      <Route path="/point" element={<PointPage />} />
      <Route path="/detail/:index" element={<ImageDetailPage />} />
      <Route path="/file" element={<FileUploadPage />} />
      <Route path="/mypage/nopharming" element={<NoPharmingPage />} />
      <Route path="/dophami" element={<MainCharacterPage />} />
      <Route path="/mypage/nopharming/letter" element={<LetterPage />} />
      <Route
        path="/mypage/nopharming/meditation"
        element={<MeditationPage />}
      />
      <Route path="/community" element={<CommuintyPage />} />
      <Route path="/dophami" element={<MainCharacterPage />} />
      <Route path="/question/detail" element={<QuestionDetailPage />} />
    </Routes>
  );
}

export default App;
