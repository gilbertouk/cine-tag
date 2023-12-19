import styles from './Card.module.css';
import iconLike from './like.png';
import iconUnlike from './unlike.png';

const Card = ({ id, titulo, capa, favorite = false, handleFavorite }) => {
  const pathImage = favorite ? iconLike : iconUnlike;

  return (
    <figure className={styles.figure}>
      <img src={capa} alt={titulo} className={styles.cover} />
      <figcaption className={styles.footer}>
        <h2>{titulo}</h2>
        <button type="button" onClick={() => handleFavorite(id)}>
          <img src={pathImage} alt="favorite icon" />
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
