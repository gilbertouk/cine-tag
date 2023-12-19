import Banner from '../../components/Banner';
import Card from '../../components/Card/Card.index';
import Title from '../../components/Title';
import styles from './Home.module.css';

const Home = ({ videos = [], handleFavorite }) => {
  return (
    <>
      <Banner image={'home'} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.cards}>
        {videos.map((video) => (
          <Card {...video} key={video.id} handleFavorite={handleFavorite} />
        ))}
      </section>
    </>
  );
};

export default Home;
