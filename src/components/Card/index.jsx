/* eslint-disable react/prop-types */
import useFavoriteContext from '../../hooks/useFavoriteContext';
import styles from './Card.module.css';
import iconLike from './like.png';
import iconUnlike from './unlike.png';

const Card = ({ id, titulo, capa }) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const pathImage = isFavorite ? iconLike : iconUnlike;

  return (
    <figure className={styles.figure}>
      <img src={capa} alt={titulo} className={styles.cover} />
      <figcaption className={styles.footer}>
        <h2>{titulo}</h2>
        <button type="button" onClick={() => addFavorite({ id, capa, titulo })}>
          <img src={pathImage} alt="favorite icon" />
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
