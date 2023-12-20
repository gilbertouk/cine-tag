import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Title from '../../components/Title';
import styles from './Home.module.css';
import videos from '../../json/db.json';

const Home = () => {
  return (
    <>
      <Banner image={'home'} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={styles.cards}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
};

export default Home;
