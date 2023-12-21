import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Title from '../../components/Title';
import styles from './Home.module.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch('https://my-json-server.typicode.com/gilbertouk/cine-tag/videos')
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <Banner image={'home'} />
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <section>
          <p className={styles.loading}>Loading...</p>
        </section>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Banner image={'home'} />
        <section>
          <Title>
            <h2 className={styles.error}>
              Ops! Ocorreu algum erro aqui, tente recarregar a pagina!
            </h2>
          </Title>
        </section>
      </>
    );
  }

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
