import styles from './Player.module.css';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFound from '../NotFound';

const Player = () => {
  const params = useParams();
  const [video, setVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch(
      `https://my-json-server.typicode.com/gilbertouk/cine-tag/videos/${params.id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, [params]);

  if (isLoading) {
    return (
      <>
        <Banner image="player" />
        <Title>
          <h1>Player</h1>
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
        <Banner image="player" />
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

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </section>
    </>
  );
};

export default Player;
