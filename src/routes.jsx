import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import FavoritesProvider from './context/Favorites';
import Player from './pages/Player';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorite />} />
            <Route path="/:id" element={<Player />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
