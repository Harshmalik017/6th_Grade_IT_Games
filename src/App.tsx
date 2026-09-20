import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentSelect from './pages/StudentSelect';
import Home from './pages/Home';
import ChapterPage from './pages/ChapterPage';
import GamePage from './pages/GamePage';
import RiyaHome from './pages/RiyaHome';
import RiyaScienceHome from './pages/RiyaScienceHome';
import RiyaScienceChapterPage from './pages/RiyaScienceChapterPage';
import RiyaScienceGamePage from './pages/RiyaScienceGamePage';
import SiyaHome from './pages/SiyaHome';
import SiyaChapterPage from './pages/SiyaChapterPage';
import SiyaGamePage from './pages/SiyaGamePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col pb-8">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<StudentSelect />} />
            <Route path="/riya" element={<RiyaHome />} />
            <Route path="/riya/computer" element={<Home />} />
            <Route path="/chapter/:group" element={<ChapterPage />} />
            <Route path="/game/:gameId" element={<GamePage />} />
            <Route path="/riya/science" element={<RiyaScienceHome />} />
            <Route path="/riya/science/chapter/:group" element={<RiyaScienceChapterPage />} />
            <Route path="/riya/science/game/:gameId" element={<RiyaScienceGamePage />} />
            <Route path="/siya" element={<SiyaHome />} />
            <Route path="/siya/chapter/:group" element={<SiyaChapterPage />} />
            <Route path="/siya/game/:gameId" element={<SiyaGamePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
