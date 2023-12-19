import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import data from './json/db.json';
import { useState } from 'react';

const AppRoutes = () => {
  const [videos, setVideos] = useState(data);

  const handleFavorite = (id) => {
    setVideos(
      videos.map((currentVideo) => {
        console.log(!currentVideo.favorite);

        id === currentVideo.id
          ? (currentVideo.favorite = !currentVideo.favorite)
          : currentVideo.favorite;

        return currentVideo;
      }),
    );
  };

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home videos={videos} handleFavorite={handleFavorite} />}
          />
          <Route
            path="/favoritos"
            element={
              <Favorite videos={videos} handleFavorite={handleFavorite} />
            }
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
