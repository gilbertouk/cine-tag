import styles from './Favorite.module.css';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import Card from '../../components/Card';
import useFavoriteContext from '../../hooks/useFavoriteContext';

const Favorite = () => {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner image={'favoritos'} />
      <Title>
        <h1>Meus Favoritos</h1>
      </Title>
      <section className={styles.cards}>
        {favorite.map((fav) => (
          <Card key={fav?.id} {...fav} />
        ))}
      </section>
    </>
  );
};

export default Favorite;
