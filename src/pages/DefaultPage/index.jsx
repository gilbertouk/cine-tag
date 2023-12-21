import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import FavoritesProvider from '../../context/Favorites';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

const DefaultPage = () => {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  );
};

export default DefaultPage;
