import styles from './NotFound.module.css';
import Title from '../../components/Title';

const NotFound = () => {
  return (
    <section className={styles.container}>
      <Title>
        <h2>Ops!</h2>
      </Title>
      <p>Page not found.</p>
    </section>
  );
};

export default NotFound;
