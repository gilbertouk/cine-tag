import styles from './Favorite.module.css';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card/Card.index';
import { useEffect, useState } from 'react';

const Favorite = ({ videos = [], handleFavorite }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(videos.filter((video) => video.favorite));
  }, [videos]);

  return (
    <>
      <Banner image={'favoritos'} />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.cards}>
        {favorites.map((video) => (
          <Card key={video.id} {...video} handleFavorite={handleFavorite} />
        ))}
      </section>
    </>
  );
};

export default Favorite;
