import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import MangaPage from './pages/MangaPage';
import DetailedAnimePage from './pages/details/DetailedAnimePage';
import DetailedMangaPage from './pages/details/DetailedMangaPage';
import FavoritesPage from './pages/FavoritesPage';
import ScrollToTop from './components/ScrollToTop';

const App: FC = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/manga" element={<MangaPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/anime/:id" element={<DetailedAnimePage />} />
        <Route path="/manga/:id" element={<DetailedMangaPage />} />
      </Routes>
    </div>
  );
};

export default App;
