import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ChapterPage from './pages/ChapterPage';
import GamePage from './pages/GamePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen pb-8">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter/:group" element={<ChapterPage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
