import styles from './Player.module.css';
import Banner from '../../components/Banner';
import Title from '../../components/Title';
import { useParams } from 'react-router-dom';
import videos from '../../json/db.json';
import { useEffect, useState } from 'react';
import NotFound from '../NotFound';

const Player = () => {
  const params = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    setVideo(videos.find((video) => video.id === +params.id));
  }, [params]);

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
